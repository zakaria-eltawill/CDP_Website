<template>
  <section class="statements-page" dir="rtl">
    <div class="hero-banner relative py-24 md:py-32 overflow-hidden">
      <div class="hero-pattern" :style="{ backgroundImage: `url(${baseUrl}pattern-bg.png)`, backgroundRepeat: 'repeat' }"></div>
      <div class="hero-glow"></div>
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">بيانات</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-2">
          استعرض أحدث البيانات والمقالات بتصميم متماشي مع هوية الموقع.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-12">
      <main>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="post in pagedPosts" :key="post.id" class="card bg-white rounded-xl shadow-md overflow-hidden">
            <router-link :to="`/statments/${post.id}`" class="block h-full">
              <div class="h-44 bg-gray-100 overflow-hidden flex items-center justify-center">
                <img :src="post.img" :alt="post.title" class="w-full h-full object-cover" />
              </div>
              <div class="p-4 text-right">
                <h3 class="text-xl font-semibold text-[#0f386f] mb-2">{{ post.title }}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-3">{{ post.excerpt }}</p>
                <div class="flex items-center justify-between text-xs text-gray-400">
                  <span>{{ post.date }}</span>
                  <span class="text-[#efbb20] font-semibold">اقرأ المزيد</span>
                </div>
              </div>
            </router-link>
          </article>
        </div>

        <nav class="mt-10 flex items-center justify-center gap-2">
          <button v-if="page > 1" @click="page--" class="px-3 py-1 rounded-md bg-gray-200 text-gray-700 text-sm">‹ السابق</button>
          <span class="text-sm text-gray-500">الصفحة {{ page }} من {{ totalPages }}</span>
          <button v-if="page < totalPages" @click="page++" class="px-3 py-1 rounded-md bg-[#efbb20] text-white text-sm">التالي ›</button>
        </nav>
      </main>
    </div>
  </section>
</template>

<script>
import posts from '@/data/statementsData'

const PAGE_SIZE = 9

export default {
  name: 'StatementsView',
  data() {
    return {
      posts,
      page: 1,
      pageSize: PAGE_SIZE,
      baseUrl: import.meta.env.BASE_URL
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.pageSize)
    },
    pagedPosts() {
      const start = (this.page - 1) * this.pageSize
      return this.posts.slice(start, start + this.pageSize)
    }
  }
}
</script>

<style scoped>
.statements-page { direction: rtl; background: #f8fbff; font-family: "Tajawal", sans-serif; color: #10294b; }
.hero-banner { position: relative; overflow: hidden; background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%); }
.hero-pattern { position: absolute; inset: 0; opacity: 0.07; }
.hero-glow { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%); }
.hero-banner h1 { font-weight: 800; }
.hero-banner p { color: rgba(255, 255, 255, 0.88); }
.card img { transition: transform .4s ease; }
.card:hover img { transform: scale(1.03); }
.line-clamp-3 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
@media (max-width: 640px) {
  .h-44 { height: 200px; }
}
</style>
