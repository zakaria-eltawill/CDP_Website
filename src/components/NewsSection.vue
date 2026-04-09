<template>
  <section class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">أخر الاخبار</h2>
        <div class="w-full h-px bg-gray-200 mt-6"></div>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 stagger-children">
        
        <router-link 
          v-for="(item, index) in homeNews" 
          :key="item.id"
          :to="{ name: 'news-detail', params: { id: item.id } }"
          class="reveal group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-400 block"
          :style="{ '--i': index }"
        >
          <div class="relative h-56 overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.src='/logo.png'" />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#003a6a] shadow-sm">
              أخبار
            </div>
          </div>
          <div class="p-6 text-right">
            <h3 class="text-lg font-bold text-gray-900 mb-4 leading-relaxed group-hover:text-[#1c41d8] transition-colors duration-300">
              {{ item.title }}
            </h3>
            <div class="flex items-center justify-start space-x-2 space-x-reverse text-sm text-gray-400">
              <span>بواسطة {{ item.author }}</span>
              <span class="text-[#efbb20]">·</span>
              <span>{{ item.date }}</span>
            </div>
          </div>
        </router-link>

      </div>

      <!-- Divider -->
      <div class="mt-14 mb-10 reveal">
        <div class="h-px bg-gradient-to-l from-transparent via-gray-200 to-transparent w-full"></div>
      </div>

      <!-- CTA -->
      <div class="text-center reveal">
        <router-link to="/news" class="inline-flex items-center justify-center px-12 py-3.5 border-2 border-[#003a6a] text-[#003a6a] font-bold text-lg rounded-md hover:bg-[#003a6a] hover:text-white shadow-sm hover:shadow-lg active:translate-y-px transition-all duration-300">
          المزيد
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
import { newsItems } from '../data/newsData'
import { computed } from 'vue'

useReveal()

const homeNews = computed(() => {
  // Return the items that were originally in the home section (IDs 10, 11, 12)
  return newsItems.filter(item => [10, 11, 12].includes(item.id))
})
</script>

<style scoped>
</style>
