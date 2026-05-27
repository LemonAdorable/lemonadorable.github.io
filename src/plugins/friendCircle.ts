type FriendCircleArticle = {
  title?: string
  link?: string
  avatar?: string
  author?: string
  created?: string
}

type FriendCircleData = {
  article_data?: FriendCircleArticle[]
  statistical_data?: {
    friends_num?: number
    active_num?: number
    article_num?: number
    last_updated_time?: string
  }
}

type FriendCircleOptions = {
  private_api_url: string
  page_turning_number?: number
  error_img?: string
}

export class FriendCircle {
  private root: HTMLElement | null = null
  private articles: FriendCircleArticle[] = []
  private cursor = 0
  private options: Required<FriendCircleOptions> = {
    private_api_url: '',
    page_turning_number: 10,
    error_img: '/favicon/favicon.gif'
  }

  init(options: FriendCircleOptions) {
    this.options = {
      private_api_url: options.private_api_url,
      page_turning_number: options.page_turning_number ?? 10,
      error_img: options.error_img ?? '/favicon/favicon.gif'
    }
    this.root = document.getElementById('friend-circle-lite-root')
  }

  async load() {
    if (!this.root) return

    const apiUrl = this.normalizeUrl(this.options.private_api_url)
    if (!apiUrl) {
      this.renderMessage('暂未接入邻站动态。')
      return
    }

    const cacheKey = `friend-circle-lite:${apiUrl}`
    const cacheTimeKey = `${cacheKey}:time`
    const cacheTime = Number(localStorage.getItem(cacheTimeKey) || 0)
    const cached = localStorage.getItem(cacheKey)

    if (cached && Date.now() - cacheTime < 10 * 60 * 1000) {
      this.render(JSON.parse(cached))
      return
    }

    try {
      const response = await fetch(`${apiUrl}all.json`)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data = (await response.json()) as FriendCircleData
      localStorage.setItem(cacheKey, JSON.stringify(data))
      localStorage.setItem(cacheTimeKey, String(Date.now()))
      this.render(data)
    } catch {
      if (cached) {
        this.render(JSON.parse(cached))
      } else {
        this.renderMessage('邻站动态暂时无法加载。')
      }
    }
  }

  private normalizeUrl(url: string) {
    const trimmed = url.trim()
    if (!trimmed) return ''
    return trimmed.endsWith('/') ? trimmed : `${trimmed}/`
  }

  private escapeHtml(value: string) {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;')
  }

  private renderMessage(message: string) {
    if (!this.root) return
    this.root.innerHTML = `<div class="fc-empty">${this.escapeHtml(message)}</div>`
  }

  private render(data: FriendCircleData) {
    if (!this.root) return

    this.articles = Array.isArray(data.article_data) ? data.article_data : []
    this.cursor = 0

    if (!this.articles.length) {
      this.renderMessage('暂无邻站动态。')
      return
    }

    const stats = data.statistical_data
    this.root.innerHTML = `
      <div class="fc-random" data-fc-random></div>
      <div class="fc-list" data-fc-list></div>
      <button class="fc-more" type="button" data-fc-more>加载更多</button>
      ${
        stats
          ? `<p class="fc-stats">${stats.friends_num ?? 0} 个邻站，${stats.active_num ?? 0} 个活跃，累计 ${stats.article_num ?? this.articles.length} 篇，更新于 ${this.escapeHtml(stats.last_updated_time ?? '')}</p>`
          : ''
      }
    `

    this.renderRandom()
    this.renderNext()
    this.root.querySelector('[data-fc-more]')?.addEventListener('click', () => this.renderNext())
  }

  private renderRandom() {
    const target = this.root?.querySelector<HTMLElement>('[data-fc-random]')
    if (!target || !this.articles.length) return

    const article = this.articles[Math.floor(Math.random() * this.articles.length)]
    target.innerHTML = `
      <span class="fc-random-label">随机串门</span>
      <a href="${this.escapeHtml(article.link || '#')}" target="_blank" rel="noreferrer">${this.escapeHtml(article.title || 'Untitled')}</a>
      <button type="button" aria-label="换一篇" title="换一篇">↻</button>
    `
    target.querySelector('button')?.addEventListener('click', () => this.renderRandom())
  }

  private renderNext() {
    const list = this.root?.querySelector<HTMLElement>('[data-fc-list]')
    const button = this.root?.querySelector<HTMLButtonElement>('[data-fc-more]')
    if (!list || !button) return

    this.articles
      .slice(this.cursor, this.cursor + this.options.page_turning_number)
      .forEach((article) => list.appendChild(this.createArticleCard(article)))

    this.cursor += this.options.page_turning_number
    button.hidden = this.cursor >= this.articles.length
  }

  private createArticleCard(article: FriendCircleArticle) {
    const card = document.createElement('article')
    card.className = 'fc-article'

    const avatar = article.avatar || this.options.error_img
    const author = article.author || 'Unknown'
    const created = article.created ? article.created.substring(0, 10) : ''

    card.innerHTML = `
      <button class="fc-avatar-button" type="button" aria-label="${this.escapeHtml(author)} 的文章">
        <img class="fc-avatar no-lightbox" src="${this.escapeHtml(avatar)}" alt="" loading="lazy" onerror="this.src='${this.escapeHtml(this.options.error_img)}'" />
      </button>
      <div class="fc-article-body">
        <div class="fc-meta">
          <span>${this.escapeHtml(author)}</span>
          <time>${this.escapeHtml(created)}</time>
        </div>
        <a class="fc-title" href="${this.escapeHtml(article.link || '#')}" target="_blank" rel="noreferrer">${this.escapeHtml(article.title || 'Untitled')}</a>
      </div>
    `

    card.querySelector('.fc-avatar-button')?.addEventListener('click', () => {
      this.renderAuthor(author, avatar)
    })

    return card
  }

  private renderAuthor(author: string, avatar: string) {
    const articles = this.articles.filter((article) => article.author === author).slice(0, 5)
    const modal = document.createElement('div')
    modal.className = 'fc-modal'
    modal.innerHTML = `
      <div class="fc-modal-panel">
        <button class="fc-modal-close" type="button" aria-label="关闭">×</button>
        <div class="fc-modal-header">
          <img class="fc-avatar no-lightbox" src="${this.escapeHtml(avatar || this.options.error_img)}" alt="" loading="lazy" onerror="this.src='${this.escapeHtml(this.options.error_img)}'" />
          <strong>${this.escapeHtml(author)}</strong>
        </div>
        <div class="fc-modal-list">
          ${articles
            .map(
              (article) => `
                <a href="${this.escapeHtml(article.link || '#')}" target="_blank" rel="noreferrer">
                  <span>${this.escapeHtml(article.title || 'Untitled')}</span>
                  <time>${this.escapeHtml(article.created ? article.created.substring(0, 10) : '')}</time>
                </a>
              `
            )
            .join('')}
        </div>
      </div>
    `
    modal.addEventListener('click', (event) => {
      if (event.target === modal || (event.target as HTMLElement).classList.contains('fc-modal-close')) {
        modal.remove()
      }
    })
    document.body.appendChild(modal)
  }
}
