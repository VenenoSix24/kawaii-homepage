# 个人网站/博客项目

<div align="center">

<p align="center">
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js"></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
<a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
<a href="https://marked.js.org/"><img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown"></a>
</p>

一个美观、响应式的个人网站/博客，基于Vue3、Tailwind CSS和Vite构建。

[🚀 Demo](https://kawaii.776624.xyz) | [📖 文档](https://github.com/VenenoSix24/kawaii-homepage/blob/main/README.md) | [🐛 问题反馈](https://github.com/VenenoSix24/kawaii-homepage/issues)

![网站预览](https://s2.loli.net/2025/05/17/usnaUKvDZ8k93FX.jpg)

</div>

## ✨ 功能特点

- 🌈 **响应式设计** - 完美适配桌面端、平板和移动设备
- 📝 **自动化文章管理** - 无需手动配置，文章即加即用
- 🚀 **交互式文章创建** - 通过 `npm run new` 命令轻松创建新文章
- 💅 **优美的排版** - 集成 `@tailwindcss/typography` 插件，提供专业级的阅读体验
- 🎭 **动漫主题页面** - 为《总之就是非常可爱》设计的主题页面
- 🏃‍♂️ **流畅动画** - 平滑的页面过渡和滚动动画
- ~~🌙 **深色/浅色模式** - 支持主题切换，保护您的眼睛~~
- ~~📊 **GitHub项目展示** - 手动展示您的GitHub仓库~~
- ~~💬 **联系表单** - 方便访客与您取得联系~~

## 🛠️ 技术栈

- **前端框架**: [Vue 3](https://v3.vuejs.org/) (Composition API)
- **路由管理**: [Vue Router 4](https://router.vuejs.org/)
- **CSS框架**: [Tailwind CSS](https://tailwindcss.com/)
- **排版**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **构建工具**: [Vite](https://vitejs.dev/)
- **图标库**: [Font Awesome](https://fontawesome.com/)
- **动画库**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Markdown解析**: [Marked](https://marked.js.org/)

## 📦 安装与使用

### 前提条件

- Node.js (v16.0.0或更高版本)
- npm 或 yarn

### 克隆和安装

```bash
# 克隆仓库
git clone [https://github.com/VenenoSix24/kawaii-homepage.git](https://github.com/VenenoSix24/kawaii-homepage.git)
cd kawaii-homepage

# 安装依赖
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:3000` (或终端提示的端口) 查看您的网站。

### 创建一篇新文章

本项目最便捷的功能之一！只需在终端运行：

```bash
npm run new
```

脚本会交互式地提示您输入文章标题，然后自动在 `src/md/` 目录下创建带有预设元数据模板的 Markdown 文件。

### 构建生产版本

```bash
npm run build
```

构建完成后，`dist` 目录中的文件即可部署。

## 🔄 项目结构

```
/
├── dist/                 # 构建输出目录
├── public/               # 静态资源 (不会被打包处理)
├── scripts/              # 自动化脚本
│   └── new-post.js       # 创建新文章的脚本
├── src/
│   ├── assets/           # 样式和资源文件
│   ├── components/       # Vue组件
│   ├── md/               # Markdown文章源文件目录
│   ├── router/           # 路由配置
│   ├── utils/            # 工具函数 (Markdown处理)
│   ├── views/            # 页面视图组件
│   └── ...
├── package.json          # 项目依赖和脚本
└── ...
```

## 🎨 自定义网站内容

### 1. 修改网站全局信息

推荐在中央配置文件 `src/config/site.js` 中管理网站的大部分内容，包括：

* 网站标题、作者、联系方式等
* 社交媒体链接
* 导航菜单项
* 作品集页面的项目列表
* 《总之就是非常可爱》页面的所有内容

### 2. 添加和管理文章

流程已完全自动化：

1. **创建文章** : 在终端运行 `npm run new` 并根据提示输入标题。
2. **编写内容** : 打开 `src/md/` 目录下新生成的文件，补充 `category`, `tags` 等元数据，然后开始撰写正文。

网站会自动发现并展示你的新文章，无需任何额外配置。

### 3. 修改主题颜色与字体

所有设计系统的核心定义都在 `tailwind.config.js` 文件中。你可以在此文件中：

* 修改 `theme.extend.colors` 中的 `primary`, `secondary` 等颜色值。
* 修改 `theme.extend.fontFamily` 来更换网站的全局字体。

## 🚀 部署指南

该项目可以轻松部署到任何支持静态网站的平台，如 Vercel, Netlify, GitHub Pages, 或您自己的服务器。

1. 运行 `npm run build` 构建项目。
2. 将生成的 `dist` 目录上传到您的托管平台。
3. 确保您的服务器配置能正确处理单页应用（SPA）的路由，通常需要将所有未匹配的路径重定向到 `index.html`。

## 🙏 鸣谢

* [Vue.js团队](https://vuejs.org/)
* [Tailwind CSS团队](https://tailwindcss.com/)
* [开源社区](https://github.com/)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/VenenoSix24">VenenoSix24</a>
</div>
