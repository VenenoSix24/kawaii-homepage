<template>
  <div>
    <!-- 页面标题部分 - 使用主题色渐变背景 -->
    <section class="py-16" style="background: linear-gradient(to right, rgba(255, 183, 197, 0.2), rgba(216, 174, 242, 0.2));">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800" data-aos="fade-up">
          {{ siteConfig.kawaii.animeInfo.title }}
        </h1>
        <div class="w-20 h-1 bg-kawaii-pink mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          这里是我对《总之就是非常可爱》的感想和收藏，分享这部温馨治愈的作品带给我的快乐。
        </p>
      </div>
    </section>
    
    <!-- 作品介绍部分 -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div class="md:w-1/2" data-aos="fade-right">
              <div class="rounded-xl overflow-hidden shadow-lg">
                <!-- 改变边框颜色为粉色 -->
                <div class="bg-kawaii-pink p-1">
                  <div class="bg-white p-2 rounded-lg">
                    <div class="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
                      <!-- 使用配置文件中的海报图片 -->
                      <img :src="siteConfig.kawaii.poster" :alt="siteConfig.kawaii.animeInfo.title" class="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="md:w-1/2" data-aos="fade-left">
              <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800">关于《总之就是非常可爱》</h2>
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-sm text-gray-600">{{ siteConfig.kawaii.animeInfo.titleEn }}</span>
                <span class="text-sm text-gray-600">{{ siteConfig.kawaii.animeInfo.releaseDate }}</span>
                <span class="text-sm text-gray-600">{{ siteConfig.kawaii.animeInfo.episodes }}</span>
              </div>
              <p class="text-gray-700 mb-4">
                {{ siteConfig.kawaii.animeInfo.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-kawaii-pink bg-opacity-20 text-kawaii-pink rounded-full text-sm">
                  恋爱喜剧
                </span>
                <span class="px-3 py-1 bg-kawaii-purple bg-opacity-20 text-kawaii-purple rounded-full text-sm">
                  日常
                </span>
                <span class="px-3 py-1 bg-pink-400 bg-opacity-20 text-pink-500 rounded-full text-sm">
                  治愈
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <a href="https://www.bilibili.com/bangumi/media/md28229676" target="_blank" rel="noopener noreferrer" class="kawaii-btn">
                  <i class="fab fa-bilibili mr-2"></i>
                  在哔哩哔哩观看
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 角色介绍部分 -->
    <section class="section bg-pink-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">主要角色</h2>
          <div class="w-20 h-1 bg-kawaii-pink mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="(character, index) in siteConfig.kawaii.characters" :key="index" 
            class="card overflow-hidden" data-aos="fade-up" :data-aos-delay="index * 100">
            <!-- 角色图片 -->
            <div class="h-64 bg-gradient-to-br from-kawaii-pink to-kawaii-purple overflow-hidden">
              <img v-if="character.image" :src="character.image" :alt="character.name" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full flex items-center justify-center">
                <i class="fas fa-user text-white text-5xl opacity-30"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-800">{{ character.name }}</h3>
              <p class="text-gray-600 mb-4">{{ character.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 精彩场景部分 - 调整了位置 -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">精彩场景</h2>
          <div class="w-20 h-1 bg-kawaii-pink mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="(scene, index) in siteConfig.kawaii.scenes" :key="index" 
            class="rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" :data-aos-delay="index * 100">
            <img :src="scene" alt="精彩场景" class="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- 名言语录部分 - 调整了位置 -->
    <section class="section bg-purple-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">经典语录</h2>
          <div class="w-20 h-1 bg-kawaii-purple mx-auto"></div>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div v-for="(quote, index) in quotes" :key="index" 
            class="mb-8 p-6 bg-white rounded-xl shadow-sm border-l-4"
            :class="getBorderClass(index)"
            data-aos="fade-up" :data-aos-delay="index * 100">
            <p class="text-lg italic text-gray-700 mb-4">{{ quote.text }}</p>
            <div class="flex justify-end">
              <p class="text-gray-600">— {{ quote.character }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 个人感想部分 -->
    <section class="section bg-pink-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">我的感想</h2>
          <div class="w-20 h-1 bg-kawaii-pink mx-auto"></div>
        </div>
        
        <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div class="card p-8">
            <p class="text-gray-700 mb-4">
              《总之就是非常可爱》是一部充满温暖和治愈力量的作品。故事中司和星空之间纯真的爱情，以及他们日常生活中的小确幸，总能让我会心一笑。
            </p>
            <p class="text-gray-700 mb-4">
              这部作品最吸引我的地方在于它展现了爱情最美好的一面：相互理解、支持和陪伴。司和星空虽然是突然结婚，但他们一起经历的每一个平凡日常都充满了幸福感。
            </p>
            <p class="text-gray-700 mb-4">
              角色设计也非常讨喜，特别是司的可爱表情和反应总是能给人带来快乐。同时，作品中也埋藏了一些有趣的伏笔和谜团，让人对故事的发展充满期待。
            </p>
            <p class="text-gray-700">
              总之，这是一部能让人感到幸福和治愈的作品，非常推荐给喜欢轻松温馨恋爱故事的朋友们！
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import siteConfig from '../config/site';

export default {
  name: 'Kawaii',
  setup() {
    const quotes = [
      {
        text: '总之就是非常可爱！',
        character: '由崎星空'
      },
      {
        text: '我想成为你的妻子。',
        character: '由崎司'
      },
      {
        text: '无论发生什么，我都会一直在你身边。',
        character: '由崎司'
      },
      {
        text: '我们已经是夫妻了，所以这些都是理所当然的。',
        character: '由崎司'
      }
    ];

    const getBorderClass = (index) => {
      const classes = [
        'border-kawaii-pink',
        'border-kawaii-purple',
        'border-pink-400',
        'border-purple-400',
        'border-pink-300'
      ];
      return classes[index % classes.length];
    };

    return {
      siteConfig,
      quotes,
      getBorderClass
    };
  }
}
</script>

<style scoped>
.aspect-w-3 {
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
}

.aspect-h-4 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* 重写kawaii-btn的边框样式 */
.kawaii-btn {
  border: 2px solid #f4eeee;
  box-shadow: 0 4px 10px rgba(255, 183, 197, 0.5);
}

.kawaii-btn:hover {
  border-color: #f4eeee;
  box-shadow: 0 6px 12px rgba(255, 183, 197, 0.6);
}
</style> 