<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { newsItems } from '../data/newsData'
import { Calendar, User, ArrowRight, ChevronRight, Share2, Facebook, Twitter, MessageCircle } from 'lucide-vue-next'
import { useReveal } from '../composables/useReveal'

const route = useRoute()
const router = useRouter()
useReveal()

const item = computed(() => {
  const id = parseInt(route.params.id)
  return newsItems.find(n => n.id === id)
})

const goBack = () => {
  router.back()
}

// Format related news (just pick 3 others)
const relatedNews = computed(() => {
  return newsItems
    .filter(n => n.id !== item.value?.id)
    .slice(0, 3)
})
</script>

<template>
  <div v-if="item" class="pt-20 pb-20 bg-white">
    <!-- Breadcrumbs -->
    <div class="bg-gray-50 py-4 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-gray-500">
          <router-link to="/" class="hover:text-[#1c41d8] transition-colors">الرئيسية</router-link>
          <ChevronRight class="w-4 h-4 rotate-180" />
          <router-link to="/news" class="hover:text-[#1c41d8] transition-colors">أخبار و فعاليات</router-link>
          <ChevronRight class="w-4 h-4 rotate-180" />
          <span class="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">{{ item.title }}</span>
        </nav>
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      
      <!-- Meta Information -->
      <div class="flex flex-wrap items-center gap-6 mb-8 reveal">
        <div class="flex items-center gap-2 text-gray-600">
          <Calendar class="w-5 h-5 text-[#efbb20]" />
          <span class="font-medium">{{ item.date }}</span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <User class="w-5 h-5 text-[#efbb20]" />
          <span class="font-medium">بواسطة {{ item.author }}</span>
        </div>
        <div class="flex items-center gap-2 bg-[#1c41d8]/10 text-[#1c41d8] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          أخبار
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight reveal">
        {{ item.title }}
      </h1>

      <!-- Featured Image -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-12 reveal-scale">
        <img 
          :src="item.image" 
          :alt="item.title"
          class="w-full h-auto object-cover max-h-[600px]"
          onerror="this.src='/logo.png'"
        />
      </div>

      <!-- Body Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Content Body -->
        <div class="lg:col-span-8 reveal">
          <div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed space-y-6" v-html="item.content"></div>
          
          <!-- Share Bar -->
          <div class="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <span class="font-bold text-gray-900">مشاركة الخبر:</span>
              <div class="flex gap-2">
                <button class="p-2 bg-gray-100 rounded-full hover:bg-[#1c41d8] hover:text-white transition-all"><Facebook class="w-5 h-5" /></button>
                <button class="p-2 bg-gray-100 rounded-full hover:bg-[#1c41d8] hover:text-white transition-all"><Twitter class="w-5 h-5" /></button>
                <button class="p-2 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition-all"><MessageCircle class="w-5 h-5" /></button>
              </div>
            </div>
            <button @click="goBack" class="inline-flex items-center text-[#1c41d8] font-bold gap-2 group/back">
              <ArrowRight class="w-5 h-5 transition-transform group-hover/back:translate-x-1" />
              <span>العودة للأخبار</span>
            </button>
          </div>
        </div>

        <!-- Sidebar / Recent Posts -->
        <aside class="lg:col-span-4 space-y-10 reveal-right">
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">أخبار ذات صلة</h3>
            <div class="space-y-6">
              <router-link 
                v-for="related in relatedNews" 
                :key="related.id"
                :to="{ name: 'news-detail', params: { id: related.id } }"
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
       <p class="text-gray-500">جاري تحميل الخبر...</p>
    </div>
  </div>
</template>

<style scoped>
.prose :deep(p) {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}
</style>
