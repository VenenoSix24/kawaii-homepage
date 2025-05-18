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
    email: "3405395460@qq.com", // 联系邮箱
    qq: "3405395460", // QQ号码
    logo: logoImage, // Logo路径
    favicon: faviconImage, // 网站图标
    language: "zh-CN", // 网站默认语言
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
      name: "个人博客系统",
      description: "基于Vue和Node.js开发的个人博客系统，支持Markdown编辑和自定义主题。",
      github: "https://github.com/username/blog-system"
    },
    {
      name: "在线笔记应用",
      description: "一个简洁高效的在线笔记应用，支持实时保存和多设备同步功能。",
      github: "https://github.com/username/note-app"
    },
    {
      name: "天气预报小程序",
      description: "基于微信小程序开发的天气预报应用，提供精准的天气信息和温馨提示。",
      github: "https://github.com/username/weather-app"
    }
  ],

  // 首页展示的最新文章
  latestArticles: [
    {
      id: 1,
      title: "如何使用Vue3构建高性能Web应用",
      summary: "本文介绍了Vue3的新特性以及如何利用这些特性构建高性能的Web应用。"
    },
    {
      id: 2,
      title: "前端开发中的设计模式应用",
      summary: "探讨了在前端开发中常用的设计模式及其实际应用场景。"
    }
  ],

  // 项目页面展示的项目列表
  projects: [
    {
      name: "个人博客系统",
      description: "基于Vue和Node.js开发的个人博客系统，支持Markdown编辑和自定义主题。",
      image: "",
      category: "Web开发",
      technologies: ["Vue", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/username/blog-system",
      demoUrl: "https://demo.example.com/blog"
    },
    {
      name: "在线笔记应用",
      description: "一个简洁高效的在线笔记应用，支持实时保存和多设备同步功能。",
      image: "",
      category: "Web应用",
      technologies: ["Vue", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/note-app",
      demoUrl: "https://demo.example.com/notes"
    },
    {
      name: "天气预报小程序",
      description: "基于微信小程序开发的天气预报应用，提供精准的天气信息和温馨提示。",
      image: "",
      category: "小程序",
      technologies: ["微信小程序", "JavaScript", "WXML", "WXSS"],
      github: "https://github.com/username/weather-app"
    },
    // {
    //   name: "任务管理工具",
    //   description: "一个简洁易用的任务管理工具，帮助用户高效管理日常任务和项目进度。",
    //   image: "",
    //   category: "工具类应用",
    //   technologies: ["React", "Redux", "Node.js", "MongoDB"],
    //   github: "https://github.com/username/task-manager",
    //   demoUrl: "https://demo.example.com/tasks"
    // }
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
      description: "由崎星空对神秘美少女——司一见钟情。面对星空决死的告白，她的回答是“如果你愿意和我结婚，那我就跟你交往”？！充满了星空与司的爱，可爱&高贵的新婚生活开始了！"
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
        description: "星空国中时的学妹，星空家附近的钱汤“草津温泉风汤布院”老板的女儿。"
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