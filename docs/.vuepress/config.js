module.exports = {
  base: "/blog/",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'demo',
  description: '记录点滴 分享瞬间',
  dest: '/public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  dest:"/.vuepress/dist",
  theme: 'reco',
  themeConfig: {
    author: 'Kyle',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '工具推荐', 
        icon: 'reco-message',
        items: [
          { text: 'codeSandbox', link: 'https://codesandbox.io',icon: 'reco-coding' },
          { text: '正则表达式手册', link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html', icon: 'reco-coding' }
        ]
      },
      { text: '关于', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/glassy-sky-lisong', icon: 'reco-github' },
          { text: '博客园', link: 'https://cnblogs.com/glassysky', icon: 'reco-bokeyuan' },
          { text: '掘金', link: 'https://juejin.im', icon: 'reco-juejin' },
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/476991968', icon: 'reco-bilibili' },
          { text: '码云', link: 'https://gitee.com/glassyskyforgame', icon: 'reco-mayun' },
          { text: 'Twitter', link: 'https://twitter.com/GLASSYSKY113', icon: 'reco-twitter' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '我会一直想着你直到永远',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '872761393@qq.com',
        link: 'https://www.Kylex.com'
      },
      
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: 'Kyle',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: ' ',
    // 项目开始时间
    startYear: '2022.6.21',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'uVX1RdW5NvC6zEnfjERU7mAb-gzGzoHsz',// your appId
      appKey: 'DzzpF7cokBfNP107e5OjMKtQ', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是Kyle欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ],
    [
      //先安装在配置， npm install  @vuepress-reco/vuepress-plugin-bgm-player  --save
      '@vuepress-reco/vuepress-plugin-bgm-player', 
      {
        audios: [
          // 本地文件示例
          {
            name: '蜗牛',
            artist: '周杰伦',
            url: '/bgm/蜗牛1.mp3'
          },
          {
            name: '蜗牛',
            artist: '周杰伦',
            url: '/bgm/蜗牛.mp3'
          },
         
        ],
        autoShrink:true,
        shrinkMode:"mini",
      }
    ],
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    [
     //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
      'flowchart'
    ],
    [
      //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
      'sitemap', {
        hostname: 'https://www.glassysky.site'
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,  //vuepress插件PWA 先安装在配置 npm install @vuepress/pwa --save
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
     }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    ["@vuepress-yard/vuepress-plugin-window",{
      title: "远方有你伴余生の公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
      contentInfo: {
        title: "欢迎进来的小耳朵 🎉🎉🎉",
        needImg: true,
        imgUrl: "https://reinness.com/avatar.png",
        content: "喜欢博皮可以到博客园关注教程",
        contentStyle: ""
      },
      bottomInfo: {
        btnText: '关于',
        linkTo: 'https://cnblogs.com/glassysky'
      },
      closeOnce: false
    }]
  ]
}  


