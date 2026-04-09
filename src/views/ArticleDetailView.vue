<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articlesData } from '../data/articlesData'
import { Calendar, User, ChevronRight, Share2, Facebook, Twitter, MessageCircle } from 'lucide-vue-next'
import { useReveal } from '../composables/useReveal'

const route = useRoute()
const router = useRouter()
useReveal()

const article = computed(() => {
  const id = parseInt(route.params.id)
  return articlesData.find(a => a.id === id)
})

const goBack = () => {
  router.back()
}

// Format related articles (just pick 3 others)
const relatedArticles = computed(() => {
  return articlesData
    .filter(a => a.id !== article.value?.id)
    .slice(0, 3)
})
</script>

<template>
  <div v-if="article" class="pt-20 pb-20 bg-white">
    <!-- Breadcrumbs -->
    <div class="bg-gray-50 py-4 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-gray-500">
          <router-link to="/" class="hover:text-[#1c41d8] transition-colors">الرئيسية</router-link>
          <ChevronRight class="w-4 h-4 rotate-180" />
          <router-link to="/articles" class="hover:text-[#1c41d8] transition-colors">مقالات و آراء</router-link>
          <ChevronRight class="w-4 h-4 rotate-180" />
          <span class="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">{{ article.title }}</span>
        </nav>
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

      <!-- Meta Information -->
      <div class="flex flex-wrap items-center gap-6 mb-8 reveal">
        <div class="flex items-center gap-2 text-gray-600">
          <Calendar class="w-5 h-5 text-[#efbb20]" />
          <span class="font-medium">{{ article.date }}</span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <User class="w-5 h-5 text-[#efbb20]" />
          <span class="font-medium">بواسطة {{ article.author }}</span>
        </div>
        <div class="flex items-center gap-2 bg-[#1c41d8]/10 text-[#1c41d8] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          مقالات
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight reveal">
        {{ article.title }}
      </h1>

      <!-- Featured Image -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-12 reveal-scale">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-auto object-cover max-h-[600px]"
          onerror="this.src='/logo.png'"
        />
      </div>

      <!-- Body Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <!-- Content Body -->
        <div class="lg:col-span-8 reveal">
          <div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed space-y-6" v-html="article.content"></div>

          <!-- Share Section -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-bold text-gray-900 mb-4">شارك المقالة</h3>
            <div class="flex gap-3">
              <button class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Share2 class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Back Button -->
          <div class="mt-8">
            <button @click="goBack" class="inline-flex items-center text-[#1c41d8] font-bold gap-2 group/back hover:text-[#efbb20] transition-colors">
              <ArrowRight class="w-5 h-5 transition-transform group-hover/back:translate-x-1" />
              <span>العودة للمقالات</span>
            </button>
          </div>
        </div>

        <!-- Sidebar / Recent Articles -->
        <aside class="lg:col-span-4 space-y-10 reveal-right">
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">مقالات ذات صلة</h3>
            <div class="space-y-6">
              <router-link
                v-for="related in relatedArticles"
                :key="related.id"
                :to="{ name: 'article-detail', params: { id: related.id } }"
                class="group block"
              >
                <div class="flex gap-4">
                  <div class="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img :src="related.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='/logo.png'" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900 group-hover:text-[#1c41d8] transition-colors leading-snug line-clamp-2">
                      {{ related.title }}
                    </h4>
                    <span class="text-xs text-gray-400 mt-2 block">{{ related.date }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  </div>

  <!-- Loading / Not Found State -->
  <div v-else class="min-h-screen flex items-center justify-center pt-20">
    <div class="text-center">
       <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1c41d8] mx-auto mb-4"></div>
       <p class="text-gray-500">جاري تحميل المقالة...</p>
    </div>
  </div>
</template>

<style scoped>
.prose :deep(p) {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.prose :deep(h2) {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1c41d8;
}

.prose :deep(h3) {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #003a6a;
}

.prose :deep(.article-header) {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #efbb20;
}

.prose :deep(.article-header h2) {
  font-size: 2.25rem;
  font-weight: bold;
  color: #003a6a;
  margin-bottom: 1rem;
}

.prose :deep(.article-subtitle) {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.prose :deep(.article-author) {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1c41d8;
  margin-bottom: 0.5rem;
}

.prose :deep(.article-byline) {
  font-size: 1rem;
  color: #666;
  font-style: italic;
}

.prose :deep(.article-content) {
  line-height: 1.8;
}

.prose :deep(.article-content p) {
  text-align: justify;
  margin-bottom: 1.5rem;
}

.prose :deep(.article-footer) {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.prose :deep(.article-date) {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
}

.prose :deep(.article-tags) {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.prose :deep(.tag) {
  background-color: #f3f4f6;
  color: #003a6a;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>