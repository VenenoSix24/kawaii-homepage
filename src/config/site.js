/**
 * 网站配置文件
 * 在这里集中管理网站的所有配置信息，修改此文件即可自定义网站内容
 */

// 导入图片资源
import logoImage from '../assets/images/logo.jpeg';
import faviconImage from '../assets/images/favicon.ico';
import kawaiiPoster from '../assets/images/kawaii/poster.webp';
import kawaiiTsukasa from '../assets/images/kawaii/tsukasa.webp';
import kawaiiNasa from '../assets/images/kawaii/nasa.webp';
import kawaiiKaname from '../assets/images/kawaii/kaname.webp';
import kawaiiScene1 from '../assets/images/kawaii/scene1.avif';
import kawaiiScene2 from '../assets/images/kawaii/scene2.avif';
import kawaiiScene3 from '../assets/images/kawaii/scene3.avif';

const siteConfig = {
  // 基本信息
  site: {
    title: "VenenoSix24", // 网站标题
    description: "个人网站 / 技术博客 / 作品集", // 网站描述
    author: "VenenoSix24", // 作者名称
    email: "xxxxxxxx@qq.com", // 联系邮箱
    qq: " xxxxxxxx", // QQ号码
    githubUsername: "VenenoSix24", // GitHub用户名
    logo: logoImage, // Logo路径
    favicon: faviconImage, // 网站图标
    language: "zh-CN", // 网站默认语言
    // ICP备案信息
    icp: {
      number: "X公网安备xxxxxxxx号", // 请替换为您的实际ICP备案号
      link: "https://beian.mps.gov.cn/#/query/webSearch?code=xxxxxxxx", // 工信部备案管理系统链接
      showIcon: true // 是否显示备案图标
    },
  },

  // 社交媒体链接
  socialLinks: [
    { name: "博客", url: "https://blog.776624.xyz", icon: "fas fa-blog" },
    { name: "哔哩哔哩", url: "https://space.bilibili.com/294041003", icon: "fab fa-bilibili" },
    { name: "微博", url: "https://weibo.com/u/6582794675", icon: "fab fa-weibo" },
    { name: "GitHub", url: "https://github.com/VenenoSix24", icon: "fab fa-github" },
    { name: "Twitter", url: "https://x.com/s1xig", icon: "fab fa-twitter" },
    { name: "Telegram", url: "https://t.me/s1xig", icon: "fab fa-telegram" }
  ],

  // 导航菜单
  navItems: [
    { name: "首页", path: "/" },
    { name: "作品集", path: "/projects" },
    { name: "文章", path: "/articles" },
    { name: "联系我", path: "/contact" },
    { name: "总之就是非常可爱", path: "/kawaii" }
  ],

  // 首页精选项目
  featuredProjects: [
    {
      name: "总之就是非常可爱",
      description: "一个美观、响应式的个人网站主页//博客，基于Vue3、Tailwind CSS和Vite构建",
      github: "https://github.com/VenenoSix24/kawaii-homepage"
    },
    {
      name: "我去抢个座",
      description: "基于Python、FastAPI和Jinja2实现的我去图书馆抢座/预约系统",
      github: "https://github.com/VenenoSix24/igolib-ldu"
    },
    {
      name: "MSI B350M Hackintosh",
      description: "MSI B350M MORTAR Hackintosh OpenCore1.0.2 EFI",
      github: "https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore1.0.2-EFI"
    }
  ],

  // --- 作品集页面配置 ---
  projectsPage: {
    // 在这里切换模式:
    // 'hybrid': GitHub Pinned 项目 + 下方的自定义项目列表
    // 'custom': 只显示下方自定义项目列表中的项目
    mode: 'hybrid', // 您可以在 'hybrid' 和 'custom' 之间切换

    // 自定义项目列表
    // 在 'hybrid' 模式下，它们会补充在 GitHub 项目之后
    // 在 'custom' 模式下，它们是唯一显示的项目
    customProjects: [
      { repo: "sindresorhus/awesome" },
      { repo: "vinta/awesome-python" },
      // 您可以在这里添加任何想补充的公开仓库
    ]
  },


  // 首页展示的最新文章
  latestArticles: [
    {
      id: "test", // 建议使用文件名作为id，以保证能正确跳转
      title: "总之就是非常可爱——个人站点",
      summary: "本文介绍了总之就是非常可爱——个人网站/主页/博客，以及其配置部署方法。"
    },
    {
      id: "vue3-composition-api", // 建议使用文件名作为id
      title: "Vue3 Composition API完全指南",
      summary: "本文深入探讨 Vue3 的 Composition API，从基础概念到高级应用，帮助你全面掌握这一强大特性。"
    }
  ],


  // 主题配置
  theme: {
    enableDarkMode: true, // 是否启用暗色模式
    defaultTheme: "light", // 默认主题模式：light或dark
  },

  // 国际化配置
  i18n: {
    enabled: false, // 是否启用多语言
    supportedLocales: ["zh-CN", "en-US"], // 支持的语言列表
    defaultLocale: "zh-CN", // 默认语言
  },

  // 《总之就是非常可爱》页面配置
  kawaii: {
    // 海报图片
    poster: kawaiiPoster, // 海报图片路径，需要将图片放在此路径
    // 动画信息
    animeInfo: {
      title: "总之就是非常可爱",
      titleEn: "Fly Me to the Moon",
      releaseDate: "2020年10月",
      studio: "Seven Arcs",
      episodes: "8集 + OVA",
      description: "由崎星空对神秘美少女——司一见钟情。面对星空决死的告白，她的回答是\"如果你愿意和我结婚，那我就跟你交往\"？！充满了星空与司的爱，可爱&高贵的新婚生活开始了！"
    },
    // 主要角色
    characters: [
      {
        name: "由崎 司",
        image: kawaiiTsukasa,
        description: "女主角，美丽神秘的少女，星空一见钟情的女子。有着超越年龄的成熟和智慧，总之就是超级无敌非常可爱！"
      },
      {
        name: "由崎 星空",
        image: kawaiiNasa, // 角色图片路径
        description: "男主角，天才少年，因与司结婚而获得新生。头脑聪明，但在感性方面与常人迥异。"
      },
      {
        name: "有栖川 要",
        image: kawaiiKaname,
        description: "星空国中时的学妹，星空家附近的钱汤\"草津温泉风汤布院\"老板的女儿。"
      }
    ],
    // 精彩场景
    scenes: [
      kawaiiScene1,
      kawaiiScene2,
      kawaiiScene3
    ]
  }
};

export default siteConfig; 