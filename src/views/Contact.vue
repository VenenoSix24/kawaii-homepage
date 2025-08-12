<template>
  <div>
    <!-- 页面标题部分 -->
    <section class="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800" data-aos="fade-up">联系我</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          如果你有任何问题、合作意向或者只是想打个招呼，欢迎通过以下方式联系我。
        </p>
      </div>
    </section>

    <!-- 联系信息部分 -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 联系方式卡片 -->
            <div class="card p-8" data-aos="fade-up">
              <h2 class="text-2xl font-bold mb-6 text-gray-800">联系方式</h2>
              <ul class="space-y-6">
                <li class="flex items-center">
                  <div
                    class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-5">
                    <i class="fas fa-envelope text-2xl"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">邮箱</p>
                    <a href="mailto:xxxxxxxx@qq.com"
                      class="text-lg text-gray-800 hover:text-primary-500 transition-colors">
                      xxxxxxxx@qq.com
                    </a>
                  </div>
                </li>
                <li class="flex items-center">
                  <div
                    class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-5">
                    <i class="fab fa-qq text-2xl"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">QQ</p>
                    <a href="tencent://message/?uin=xxxxxxxx"
                      class="text-lg text-gray-800 hover:text-primary-500 transition-colors">
                      xxxxxxxx
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 社交媒体卡片 -->
            <div class="card p-8" data-aos="fade-up" data-aos-delay="100">
              <h2 class="text-2xl font-bold mb-6 text-gray-800">社交媒体</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                  rel="noopener noreferrer"
                  class="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-3">
                    <i :class="social.icon + ' text-2xl'"></i>
                  </div>
                  <span class="text-gray-700">{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 留言表单部分 -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="text-3xl font-bold mb-4 text-gray-800">给我留言</h2>
            <p class="text-gray-600">
              如果你有任何问题或建议，欢迎填写下面的表单给我发送消息。
            </p>
          </div>

          <div class="card p-8" data-aos="fade-up" data-aos-delay="100">
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input type="text" id="name" v-model="form.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                  <input type="email" id="email" v-model="form.email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required>
                </div>
              </div>

              <div class="mb-6">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主题</label>
                <input type="text" id="subject" v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required>
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息</label>
                <textarea id="message" v-model="form.message" rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required></textarea>
              </div>

              <div class="flex justify-center">
                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                  <i class="fas fa-paper-plane mr-2"></i>
                  {{ isSubmitting ? '发送中...' : '发送消息' }}
                </button>
              </div>

              <div v-if="formStatus" class="mt-4 p-3 rounded-lg text-center"
                :class="formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import siteConfig from '../config/site';

export default {
  name: 'Contact',
  data() {
    return {
      socialLinks: siteConfig.socialLinks,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: null
    }
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;
      this.formStatus = null;

      // 模拟表单提交
      setTimeout(() => {
        this.isSubmitting = false;
        this.formStatus = {
          type: 'success',
          message: '消息已发送！感谢您的留言，我会尽快回复。'
        };

        // 重置表单
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, 1500);

      // 实际项目中，这里应该是一个API请求
      // try {
      //   await axios.post('/api/contact', this.form);
      //   this.formStatus = {
      //     type: 'success',
      //     message: '消息已发送！感谢您的留言，我会尽快回复。'
      //   };
      //   this.form = { name: '', email: '', subject: '', message: '' };
      // } catch (error) {
      //   this.formStatus = {
      //     type: 'error',
      //     message: '发送失败，请稍后再试。'
      //   };
      // } finally {
      //   this.isSubmitting = false;
      // }
    }
  }
}
</script>