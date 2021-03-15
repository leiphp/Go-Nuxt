export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '雷小天科技-综合科技新闻资讯分享门户网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '雷小天科技,www.lxtkj.cn,中文科技资讯网,科技新闻,科技资讯,科技媒体,商业科技,科协,科技生活,科学探索,互联,网通信IT,数码电器,绿色环保,财经,科技人物,科技评论' },
      { hid: 'description', name: 'description', content: '雷小天科技（www.lxtkj.cn）是专业的中文科技新闻网站,依靠传统科技媒体平台，专注于科技新闻，服务经济和社会。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/normailze.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/]
  }
}
