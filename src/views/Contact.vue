<template>
  <div class="contact-page-wrapper-final">
    <div class="relative z-10">
      <section class="py-16 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-800 drop-shadow-sm" data-aos="fade-up">
            与我联系
          </h1>
          <div class="w-20 h-1 bg-primary-500/70 mx-auto mt-4 mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto drop-shadow-sm" data-aos="fade-up" data-aos-delay="200">
            期待收到来自你的讯息，就像星空期待着与司的每一次相遇。
          </p>
        </div>
      </section>

      <section class="section pt-8 pb-24">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div class="card-style-final" data-aos="fade-up" data-aos-delay="100">
                <div class="card-icon bg-white/50 text-blue-500">
                  <i class="fas fa-envelope-open-text"></i>
                </div>
                <h2 class="card-title">写一封信给我</h2>
                <p class="card-description">
                  无论是项目合作、技术交流，或只是单纯地想打个招呼，都欢迎随时与我联系。
                </p>
                <div class="mt-auto w-full space-y-4">
                  <a :href="'mailto:' + siteConfig.site.email" class="contact-button-final">
                    <i class="fas fa-envelope mr-3"></i>
                    发送邮件
                  </a>
                  <a :href="'tencent://message/?uin=' + siteConfig.site.qq" class="contact-button-final">
                    <i class="fab fa-qq mr-3"></i>
                    QQ 聊天
                  </a>
                </div>
              </div>

              <div class="card-style-final" data-aos="fade-up" data-aos-delay="200">
                <div class="card-icon bg-white/50 text-pink-500">
                  <i class="fas fa-satellite-dish"></i>
                </div>
                <h2 class="card-title">来我的星球做客</h2>
                <p class="card-description">
                  在这些小小的“星球”上，可以发现我的最新动态和作品，欢迎做客。
                </p>
                <div class="mt-auto w-full flex flex-wrap justify-center gap-4">
                  <a v-for="social in siteConfig.socialLinks" :key="social.name" :href="social.url" target="_blank"
                    rel="noopener noreferrer"
                    class="social-planet-final" :title="social.name">
                    <i :class="social.icon"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import siteConfig from '../config/site.js';

export default {
  name: 'Contact',
  data() {
    return {
      siteConfig
    }
  }
}
</script>

<style scoped>
/* 2. 全新的背景样式，明亮且柔和，与网站主色调一致 */
.contact-page-wrapper-final {
  @apply overflow-hidden relative;
  background-color: #f0f4ff; /* 一个非常浅的蓝色作为底色 */
  background-image:
    radial-gradient(ellipse at 10% 20%, #dbeafe 0%, transparent 50%),
    radial-gradient(ellipse at 80% 15%, #ede9fe 0%, transparent 50%),
    radial-gradient(ellipse at 70% 85%, #ffdde1 0%, transparent 50%),
    radial-gradient(ellipse at 25% 90%, #e0f2fe 0%, transparent 50%);
}

/* 3. 卡片样式在新的浅色背景下做了微调，以保证清晰度和美感 */
.card-style-final {
  @apply bg-white/60 backdrop-blur-xl rounded-2xl p-8 text-center flex flex-col items-center border border-white/50;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.card-style-final:hover {
  @apply -translate-y-2;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.card-icon { @apply w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6; }
.card-title { @apply text-2xl font-bold text-slate-800 mb-4; }
.card-description { @apply text-slate-600 mb-8 flex-grow; }

.contact-button-final {
  @apply w-full block bg-white/70 text-slate-700 font-medium py-3 px-6 rounded-lg border border-white/50 backdrop-blur-sm;
  @apply hover:bg-white hover:text-primary-500 transition-all duration-300;
}

.social-planet-final {
  @apply w-16 h-16 bg-white/70 rounded-full flex items-center justify-center text-slate-500 text-3xl border border-white/50;
  @apply hover:bg-white hover:text-primary-500 transition-all duration-300 transform hover:scale-110;
}
</style>