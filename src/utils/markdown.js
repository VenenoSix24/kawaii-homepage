// src/utils/markdown.js

import { marked } from 'marked';
import { ref } from 'vue';

let allArticlesCache = null;

// 解析Markdown文件中的前置元数据 (此函数保持不变)
function parseMarkdownFrontMatter(rawContent) {
  // ... (代码和之前一样，无需改动)
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = rawContent.match(frontMatterRegex);
  if (!match) return { frontMatter: {}, content: rawContent };
  const frontMatterStr = match[1];
  const content = rawContent.slice(match[0].length);
  const frontMatter = {};
  frontMatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim();
      if (value.startsWith('[') && value.endsWith(']')) {
        try { value = JSON.parse(value); } catch (e) {}
      }
      frontMatter[key.trim()] = value;
    }
  });
  return { frontMatter, content };
}

// 新的内部函数，一次性加载和解析所有文章，并缓存结果
async function loadAndCacheAllArticles() {
  if (allArticlesCache) {
    return allArticlesCache;
  }

  // 从 src/md 目录导入所有 .md 文件
  const modules = import.meta.glob('/src/md/*.md', { eager: true, as: 'raw' });
  const articles = [];

  for (const path in modules) {
    const slug = path.replace('/src/md/', '').replace('.md', '');
    const rawContent = modules[path];
    const { frontMatter, content } = parseMarkdownFrontMatter(rawContent);

    articles.push({
      slug,
      ...frontMatter,
      content, // 包含原始内容
      renderedContent: marked(content), // 包含渲染后的HTML
    });
  }
  
  // 按日期排序
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  allArticlesCache = articles;
  return allArticlesCache;
}

// 获取文章列表 (现在从缓存中读取)
export async function getArticleList() {
  const allArticles = await loadAndCacheAllArticles();
  
  // 列表页不需要完整内容，只提取元数据
  const articleList = allArticles.map(article => ({
    id: article.slug,
    slug: article.slug,
    title: article.title,
    date: article.date,
    author: article.author,
    category: article.category,
    tags: article.tags,
    summary: article.summary,
  }));

  return { articleList: ref(articleList) };
}

// 获取单篇文章 (现在从缓存中读取)
export async function getArticleBySlug(slug) {
  const allArticles = await loadAndCacheAllArticles();
  const article = allArticles.find(p => p.slug === slug);
  return article || null;
}

// 格式化日期函数 (此函数保持不变)
export function formatDate(dateString) {
    // ... (代码和之前一样，无需改动)
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('zh-CN', {
            year: 'numeric', month: 'long', day: 'numeric'
        }).format(date);
    } catch (e) {
        return dateString;
    }
}