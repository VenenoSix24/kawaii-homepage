// scripts/new-post.js

import fs from 'fs';
import path from 'path';
import { pinyin } from 'pinyin';
import readline from 'readline'; // 引入Node.js内置的 readline 模块

// 这是一个新的辅助函数，它会安全地从配置文件中读取作者名字
function getAuthorFromConfig() {
  try {
    const configPath = path.join(process.cwd(), 'src', 'config', 'site.js');
    const configFileContent = fs.readFileSync(configPath, 'utf-8');
    const authorMatch = configFileContent.match(/author:\s*["'](.*?)["']/);
    if (authorMatch && authorMatch[1]) {
      return authorMatch[1];
    }
  } catch (error) {
    console.warn('无法从 src/config/site.js 中读取作者信息，将使用默认值。');
  }
  return 'Your Name';
}

// 主函数，负责创建文章
function createArticle(title) {
  if (!title) {
    console.error('❌ 标题不能为空！');
    process.exit(1);
  }

  // 1. 生成文件名 (slug)
  const slug = pinyin(title, {
    style: 'normal',
    toneType: 'none',
    segment: true,
  })
  .map(word => word[0])
  .join('-')
  .toLowerCase()
  .replace(/[^a-z0-9-]/g, '-');

  // 2. 获取当前日期
  const date = new Date().toISOString().split('T')[0];

  // 3. 获取作者
  const author = getAuthorFromConfig();

  // 4. 构建元数据
  const frontMatter = `---
title: ${title}
date: ${date}
author: ${author}
category: 日常
tags: []
cover: 
summary: 
---

在这里开始编写你的文章正文...
`;

  // 5. 定义文件路径
  const CWD = process.cwd();
  const filePath = path.join(CWD, 'public', 'md', `${slug}.md`);

  // 6. 检查文件是否已存在
  if (fs.existsSync(filePath)) {
    console.error(`❌ 创建失败：文件 "${slug}.md" 已存在。`);
    process.exit(1);
  }

  // 7. 写入文件
  fs.writeFileSync(filePath, frontMatter);

  console.log('✅ 文章创建成功！');
  console.log(`文件路径: public/md/${slug}.md`);
}


// --- 程序入口 ---
const args = process.argv.slice(2);
const initialTitle = args.join(' '); // 允许多个词的标题，无需引号

if (initialTitle) {
  // 如果用户通过命令行提供了标题，则直接创建
  createArticle(initialTitle);
} else {
  // 否则，启动交互式提问
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('请输入你的文章标题: ', (title) => {
    createArticle(title);
    rl.close();
  });
}