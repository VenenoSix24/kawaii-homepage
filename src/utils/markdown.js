import { marked } from 'marked';
import { ref } from 'vue';

// 解析Markdown文件中的前置元数据
function parseMarkdownFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return {
      frontMatter: {},
      content: content
    };
  }

  const frontMatterStr = match[1];
  const remainingContent = content.slice(match[0].length);
  const frontMatter = {};

  // 解析元数据
  frontMatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim();

      // 尝试解析JSON值（如数组）
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch (error) {
          // 如果解析失败，保留原始字符串
          console.error('解析JSON失败:', error);
        }
      }

      frontMatter[key.trim()] = value;
    }
  });

  return {
    frontMatter,
    content: remainingContent
  };
}

// 获取所有Markdown文章列表
export async function getArticleList() {
  const articleList = ref([]);
  const articlesCache = ref({});

  try {
    // 首先尝试获取文章列表
    const response = await fetch('/md/index.json')
      .catch(() => {
        console.warn('没有找到文章索引文件，将直接解析所有可用的Markdown文件');
        return { ok: false };
      });

    if (response.ok) {
      // 如果存在索引文件，使用它
      const articles = await response.json();
      articleList.value = articles;
    } else {
      // 如果没有索引文件，尝试加载示例文章
      const exampleArticle = await getArticleBySlug('vue3-composition-api');
      if (exampleArticle) {
        articleList.value.push({
          id: 'vue3-composition-api',
          ...exampleArticle.frontMatter
        });
      }

      // 添加一些硬编码的文章数据以便展示
      const hardcodedArticles = [
        {
          id: 1,
          title: '如何使用Vue3构建高性能Web应用',
          date: '2023-05-15',
          author: 'VenenoSix24',
          category: '前端开发',
          tags: ['Vue', 'JavaScript', '性能优化'],
          summary: '本文介绍了Vue3的新特性以及如何利用这些特性构建高性能的Web应用。'
        },
        {
          id: 2,
          title: '前端开发中的设计模式应用',
          date: '2023-04-20',
          author: 'VenenoSix24',
          category: '前端开发',
          tags: ['JavaScript', '设计模式', '架构'],
          summary: '探讨了在前端开发中常用的设计模式及其实际应用场景。'
        },
        {
          id: 3,
          title: '响应式布局设计策略与实践',
          date: '2023-03-08',
          author: 'VenenoSix24',
          category: 'CSS',
          tags: ['CSS', '响应式设计', '移动优先'],
          summary: '详细讲解了响应式网页设计的核心原则和实践技巧。'
        },
        {
          id: 4,
          title: 'Node.js与MongoDB构建API服务',
          date: '2023-02-15',
          author: 'VenenoSix24',
          category: '后端开发',
          tags: ['Node.js', 'MongoDB', 'API'],
          summary: '本文介绍了如何使用Node.js和MongoDB构建高效、可扩展的RESTful API服务。'
        }
      ];

      articleList.value = [...articleList.value, ...hardcodedArticles];
    }
  } catch (error) {
    console.error('获取文章列表失败:', error);
  }

  return { articleList, articlesCache };
}

// 获取单篇文章的内容
export async function getArticleBySlug(slug) {
  try {
    const response = await fetch(`/md/${slug}.md`);
    if (!response.ok) {
      console.error(`获取文章失败: ${slug}`);
      return null;
    }

    const content = await response.text();
    const { frontMatter, content: markdownContent } = parseMarkdownFrontMatter(content);

    return {
      slug,
      frontMatter,
      content: markdownContent,
      renderedContent: marked(markdownContent)
    };
  } catch (error) {
    console.error(`获取文章失败: ${slug}`, error);
    return null;
  }
}

// 从前置元数据中解析日期
export function formatDate(dateString) {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('日期格式化失败:', error);
    return dateString;
  }
} 