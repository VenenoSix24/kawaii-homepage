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
- ~~🌙 **深色/浅色模式** - 支持主题切换，保护您的眼睛~~
- 📊 **GitHub项目展示** - 手动展示您的GitHub仓库
- 📝 **Markdown文章支持** - 使用Markdown轻松写作和发布文章
- 🎭 **动漫主题页面** - 专为《总之就是非常可爱》粉丝设计的主题页面
- 💬 **联系表单** - 方便访客与您取得联系
- 🏃‍♂️ **流畅动画** - 平滑的页面过渡和滚动动画

## 🛠️ 技术栈

- **前端框架**: [Vue 3](https://v3.vuejs.org/) (Composition API)
- **路由管理**: [Vue Router 4](https://router.vuejs.org/)
- **CSS框架**: [Tailwind CSS](https://tailwindcss.com/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **图标库**: [Font Awesome](https://fontawesome.com/)
- **动画库**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Markdown解析**: [Marked](https://marked.js.org/)

## 📦 安装与使用

### 前提条件

- Node.js (v14.0.0或更高版本)
- npm或yarn

### 克隆和安装

```bash
# 克隆仓库
https://github.com/VenenoSix24/kawaii-homepage.git
cd kawaii-homepage

# 安装依赖
npm install
# 或
yarn
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

访问 `http://localhost:3000` 查看您的网站。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

构建完成后，`dist` 目录中的文件即可部署。

## 🔄 项目结构

```
/
├── public/             # 静态资源
│   └── md/             # Markdown文章
├── src/
│   ├── assets/         # 样式和资源文件
│   │   ├── css/        # CSS文件
│   │   └── images/     # 图片资源
│   ├── components/     # Vue组件
│   ├── router/         # 路由配置
│   ├── utils/          # 工具函数
│   ├── views/          # 页面视图组件
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── vite.config.js      # Vite配置
├── tailwind.config.js  # Tailwind CSS配置
└── README.md           # 项目说明
```

## 🎨 自定义网站内容

### 中央配置文件

本项目提供了一个中央配置文件，让您可以在一个地方管理网站的大部分内容：

1. 打开 `src/config/site.js` 文件 ***(如果没有，请将目录下的 site.example.js 重命名为 site.js )***
2. 在此文件中，您可以修改以下内容：
   - 网站基本信息（标题、描述、作者等）
   - 社交媒体链接
   - 导航菜单
   - 首页展示的项目和文章
   - 项目页面的项目列表
   - ~~主题设置（深色/浅色模式）~~
   - 国际化设置

```js
// src/config/site.js 示例
const siteConfig = {
  // 基本信息
  site: {
    title: "XXX", // 网站标题
    description: "个人网站 / 技术博客 / 作品集", // 网站描述
    author: "XXX", // 作者名称
    email: "3xxxxxxxxx@qq.com", // 联系邮箱
    qq: "3xxxxxxxxx", // QQ号码
    logo: "/src/assets/images/logo.jpeg", // Logo路径
    favicon: "/src/assets/images/favicon.png", // 网站图标
    language: "zh-CN", // 网站默认语言
  },
  // 其他设置...
};
```

通过修改此文件，您可以快速更新网站的各个部分，无需深入了解代码结构。

### 基本信息配置

您可以在以下文件中修改个人信息和网站内容：

1. **修改个人信息和首页内容**：

   - 编辑 `src/views/Home.vue` 文件
   - 更新个人介绍、技能、项目和社交媒体链接等信息
2. **更新导航栏和页脚**：

   - 在 `src/components/Navbar.vue` 中修改导航菜单
   - 在 `src/components/Footer.vue` 中更新页脚信息和社交媒体链接
3. **更改网站主题颜色**：

   - 编辑 `tailwind.config.js` 文件中的颜色配置

   ```js
   theme: {
     extend: {
       colors: {
         primary: { /* 主题色 */ },
         secondary: { /* 次要色 */ },
         kawaii: { /* 动漫主题色 */ }
       }
     }
   }
   ```

### 添加和管理文章

项目支持两种方式管理文章内容：

#### 方法1：使用Markdown文件（推荐）

1. 在 `public/md/` 目录下创建Markdown文件，如 `my-article.md`
2. 添加文章前置元数据（必须包含以下格式）：
   ```md
   ---
   title: 文章标题
   date: 2025-05-17
   author: 作者名
   category: 文章分类
   tags: ["标签1", "标签2"]
   cover: 封面图片URL（可选）
   summary: 文章摘要
   ---

   正文内容...
   ```
3. 文章会自动显示在文章列表页面

#### 方法2：直接在代码中添加

1. 打开 `src/utils/markdown.js` 文件
2. 在 `hardcodedArticles` 数组中添加新的文章对象

### 添加和更新项目

修改 `src/views/Projects.vue` 文件中的 `projects` 数组：

```js
projects: [
  {
    name: "项目名称",
    description: "项目描述",
    image: "项目图片URL（可选）",
    category: "项目分类",
    technologies: ["技术1", "技术2"],
    github: "GitHub仓库URL"
  },
  // 添加更多项目...
]
```

### 自定义动漫（ 《总之就是非常可爱》 ）页面

通过修改配置文件，您可以轻松更新动漫（ 《总之就是非常可爱》 ）页面的内容：

1. 打开 `src/config/site.js` 文件
2. 在 `kawaii` 部分配置以下内容：
   - 海报图片：将您喜欢的海报图片放置在 `src/assets/images/kawaii/` 目录，并在 `poster` 字段中指定路径
   - 动画信息：修改 `animeInfo` 中的标题、发布日期、集数等信息
   - 角色设置：在 `characters` 数组中添加或修改角色信息，包括名称、图片和描述
   - 精彩场景：在 `scenes` 数组中添加场景图片路径

```js
// kawaii配置示例
kawaii: {
  // 海报图片
  poster: "/src/assets/images/kawaii/poster.jpg",
  // 动画信息
  animeInfo: {
    title: "总之就是非常可爱",
    titleEn: "Tonikaku Kawaii",
    // 其他信息...
  },
  // 主要角色
  characters: [
    {
      name: "由崎星空（NASA）",
      image: "/src/assets/images/kawaii/nasa.jpg",
      description: "男主角，天才少年..."
    },
    // 添加更多角色...
  ],
  // 精彩场景
  scenes: [
    "/src/assets/images/kawaii/scene1.jpg",
    // 添加更多场景...
  ]
}
```

注意：需要创建 `src/assets/images/kawaii/` 目录并放入对应的图片文件。

## 🚀 部署指南

### 部署到服务器

1. 构建生产版本

   ```bash
   npm run build
   ```
2. 将 `dist` 目录中的文件上传到您的服务器

   ```bash
   # 使用rsync示例（需要安装rsync）
   rsync -avz --delete dist/ username@your-server:/path/to/html/
   ```
3. 配置服务器

   - 对于 Nginx：
     ```nginx
     server {
         listen 80;
         server_name yourdomain.com;
         root /path/to/html;
         index index.html;

         location / {
             try_files $uri $uri/ /index.html;
         }
     }
     ```
   - 对于 Apache，确保启用了 mod_rewrite 并在根目录创建 `.htaccess` 文件：
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

### 部署到Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fhomepage)

通过Vercel仪表板部署是最简单的方法：

1. 点击上方的"Deploy with Vercel"按钮，或在[Vercel仪表板](https://vercel.com/dashboard)中导入您的GitHub仓库
2. Vercel会自动识别Vue项目并配置正确的构建设置
3. 点击"Deploy"按钮后，您的网站将自动部署并生成一个可访问的URL
4. 您可以在Vercel仪表板中自定义域名、环境变量和其他设置

手动部署方法：

1. 首先Fork本仓库到您的GitHub账号
2. 访问[Vercel官网](https://vercel.com)并使用GitHub账号登录
3. 在Vercel仪表板中点击"Add New..."，然后选择"Project"
4. 从列表中选择您fork的仓库
5. Vercel会自动检测项目类型并预设构建配置，您可以根据需要进行调整
6. 点击"Deploy"按钮完成部署
7. 部署完成后，Vercel会生成一个可访问的URL，您也可以添加自定义域名

每次向仓库推送更改时，Vercel会自动重新部署您的网站。

### 部署到其他平台

该项目也可以部署到其他静态托管平台，如GitHub Pages、Netlify、Firebase Hosting等，具体部署方法请参考各平台文档。

## 🧩 进阶定制

### 添加新页面

1. 在 `src/views/` 目录下创建新的Vue组件
2. 在 `src/router/index.js` 中添加新的路由配置
3. 在导航栏 `src/components/Navbar.vue` 中添加对应链接

### ~~集成第三方服务~~

- ~~**集成评论系统**：可添加Disqus、Gitalk等第三方评论系统~~
- ~~**分析服务**：集成Google Analytics或百度统计~~
- ~~**表单提交**：使用Formspree或Netlify Forms处理联系表单~~

## 📄 许可证

[MIT](LICENSE)

## 🙏 鸣谢

- [Vue.js团队](https://vuejs.org/)
- [Tailwind CSS团队](https://tailwindcss.com/)
- [开源社区](https://github.com/)
- 以及所有提供支持和反馈的用户

---

<div align="center">
Made with ❤️ by <a href="https://github.com/VenenoSix24">VenenoSix24</a>
</div>
