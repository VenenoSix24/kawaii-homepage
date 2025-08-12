# 总之就是非常可爱——个人网站/主页/博客

<div align="center">

<p align="center">
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js"></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
<a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
<a href="https://marked.js.org/"><img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown"></a>
</p>

一个美观、响应式的个人网站/主页/博客，基于Vue3、Tailwind CSS和Vite构建，融入动漫《总之就是非常可爱》元素。

[🚀 Demo](https://kawaii.776624.xyz) | [📖 文档](https://github.com/VenenoSix24/kawaii-homepage/blob/main/README.md) | [🐛 问题反馈](https://github.com/VenenoSix24/kawaii-homepage/issues)

![网站预览](https://s2.loli.net/2025/05/17/usnaUKvDZ8k93FX.jpg)

</div>

## ✨ 功能特点

- 🌈 **响应式设计** - 完美适配桌面端、平板和移动设备
- 📊 **GitHub 项目自动同步** - 自动抓取并展示您 GitHub 上固定的(Pinned)仓库
- 📝 **自动化文章管理** - 无需手动配置，文章即加即用
- 🚀 **交互式文章创建** - 通过 `npm run new` 命令轻松创建新文章
- 🔍 **文章分类与标签过滤** - 在文章列表页提供内容筛选功能
- 💅 **优美的排版与交互** - 集成 `@tailwindcss/typography` 插件并优化了UI细节
- 🎭 **动漫主题页面** - 为《总之就是非常可爱》设计的主题页面
- 🏃‍♂️ **流畅动画** - 平滑的页面过渡和滚动动画
- 📈 **打包分析** - 集成 `rollup-plugin-visualizer` 以分析构建产物
- ~~🌙 **深色/浅色模式** - 支持主题切换，保护您的眼睛~~
- ~~💬 **联系表单** - 方便访客与您取得联系~~

## 🛠️ 技术栈

- **前端框架**: [Vue 3](https://v3.vuejs.org/) (Composition API)
- **路由管理**: [Vue Router 4](https://router.vuejs.org/)
- **CSS框架**: [Tailwind CSS](https://tailwindcss.com/)
- **排版**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **构建工具**: [Vite](https://vitejs.dev/)
- **打包分析**: [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
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

在开始开发前，请务必先完成下面的 **“配置 GitHub 项目自动同步”** 步骤。

### 本地开发

**Bash**

```bash
npm run dev
```

访问 `http://localhost:3000` (或终端提示的端口) 查看您的网站。

### 创建一篇新文章

只需在终端运行：

```bash
npm run new
```

脚本会交互式地提示您输入文章标题，然后自动在 `src/md/` 目录下创建带有预设元数据模板的 Markdown 文件。

### 构建与分析

```bash
npm run build
```

该命令会执行生产环境的构建，并自动在浏览器中打开一个名为 `stats.html` 的打包分析报告，让您能清晰地看到项目中各个模块的体积。构建完成后，`dist` 目录中的文件即可部署。

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

### 1. 配置 GitHub 项目自动同步（重要）

本项目的“作品集”页面是动态的，它会自动拉取并展示您在 GitHub 上固定的(Pinned)仓库。要使其正常工作，您需要进行如下配置：

**a. 创建 GitHub 个人访问令牌 (PAT)**

* 前往 GitHub 的 `Settings` > `Developer settings` > `Personal access tokens` > `Tokens (classic)`。
* 生成一个新令牌，**权限 (scopes) 只勾选 `public_repo`** 即可。
* **请务必复制并妥善保管生成的令牌** ，因为它只会出现一次。

**b. 创建本地环境变量文件**

* 在项目根目录下，创建一个名为 `.env.local` 的文件。
* 在文件中添加以下内容，并填入你的信息：
  **代码段**

  ```
  # .env.local
  VITE_GITHUB_USERNAME="你的GitHub用户名"
  VITE_GITHUB_TOKEN="粘贴你刚刚生成的ghp_开头的令牌"
  ```
* `.env.local` 文件已被添加到 `.gitignore`，不会被上传到代码仓库，保证了令牌的安全。

**c. 配置 `site.js`**

* 打开 `src/config/site.js` 文件，找到 `site` 对象，并确保 `githubUsername` 字段已正确填写你的 GitHub 用户名。
* 如果没有 `src/config/site.js` 文件，请将 `src/config/site.example.js` 重命名为 `site.js` 。

完成以上步骤并重启开发服务器后，你的作品集页面就会自动显示你的 GitHub Pinned 项目了。

### 2. 添加和管理文章

流程已完全自动化：

1. **创建文章** : 在终端运行 `npm run new` 并根据提示输入标题。
2. **编写内容** : 打开 `src/md/` 目录下新生成的文件，补充 `category`, `tags` 等元数据，然后开始撰写正文。

网站会自动发现并展示你的新文章，无需任何额外配置。

### 3. 修改网站其他信息

大部分网站内容都可以在中央配置文件 `src/config/site.js` 中管理，包括：

* 网站标题、作者、联系方式等
* 社交媒体链接
* 导航菜单项
* **首页展示的精选项目** (注意：这里是手动配置的，与作品集页面的自动同步不同)
* 《总之就是非常可爱》页面的所有内容

### 4. 修改主题颜色与字体

所有设计系统的核心定义都在 `tailwind.config.js` 文件中。你可以在此文件中：

* 修改 `theme.extend.colors` 中的 `primary`, `secondary` 等颜色值。
* 修改 `theme.extend.fontFamily` 来更换网站的全局字体。

## 🚀 部署指南

该项目可以轻松部署到任何支持静态网站的平台，如 Vercel, Netlify, GitHub Pages 或 您自己的服务器。

#### **通用部署步骤**

1. 运行 `npm run build` 构建项目。
2. 将生成的 `dist` 目录上传到您的托管平台。
3. 确保您的服务器配置能正确处理单页应用（SPA）的路由，通常需要将所有未匹配的路径重定向到 `index.html`。

#### **通过 Vercel 手动部署**

1. **首先 Fork 本仓库到你的账号**
2. **登录 Vercel 并创建项目**：
   - 使用您的 GitHub 账户登录 [Vercel](https://vercel.com)。
   - 在个人 Dashboard 页面，点击 “**Add New...**” -> “**Project**”。
3. **导入 Git 仓库**：
   - 在 “Import Git Repository” 列表中，选择您 Fork 的项目仓库，点击 “**Import**”。
4. **配置项目**：
   - **Framework Preset**：Vercel 将自动识别为 `Vite` 并完成预设，无需修改。
   - **Build and Output Settings**：构建与输出目录设置将自动填充，确认无误即可。
   - **Environment Variables (环境变量)**：此项为必需配置。请展开此部分，并添加以下两个环境变量：
     - **`VITE_GITHUB_USERNAME`**: 您的 GitHub 用户名。
     - **`VITE_GITHUB_TOKEN`**: 您创建的、拥有 `public_repo` 权限的个人访问令牌 (Personal Access Token)。
5. **执行部署**：
   - 点击 “**Deploy**” 按钮，Vercel 将自动执行 `npm install` 和 `npm run build` 命令。
   - 部署成功后，Vercel 将提供一个 `.vercel.app` 的公开访问域名或者自定义你的个人域名。
   - 后续任何向 `main` 分支的推送，都将自动触发 Vercel 的重新部署。

## 🙏 鸣谢

* [Vue.js团队](https://vuejs.org/)
* [Tailwind CSS团队](https://tailwindcss.com/)
* [开源社区](https://github.com/)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/VenenoSix24">VenenoSix24</a>
</div>
