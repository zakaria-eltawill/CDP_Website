<script setup>
import { useReveal } from '../composables/useReveal'
import { Calendar, User, ArrowRight } from 'lucide-vue-next'
import { newsItems } from '../data/newsData'

useReveal()

// We filter out the 3 items that are primarily for the home section if we want, 
// but usually a news page shows everything.
const displayItems = newsItems;
</script>

<template>
  <div class="pt-20">
    <!-- News Hero -->
    <section class="hero-banner relative py-16 md:py-24 text-white overflow-hidden">
      <div class="hero-pattern"></div>
      <div class="hero-glow"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 reveal">أخبار و فعاليات</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-8 reveal-scale"></div>
        <p class="text-xl opacity-90 max-w-2xl mx-auto reveal" style="transition-delay: 200ms;">
          تابع آخر المستجدات والنشاطات السياسية والاجتماعية للحزب المدني الديمقراطي
        </p>
      </div>
    </section>

    <!-- News Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link 
            v-for="(item, index) in newsItems" 
            :key="item.id"
            :to="{ name: 'news-detail', params: { id: item.id } }"
            class="reveal bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group block"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onerror="this.src='/logo.png'"
              />
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div class="absolute bottom-4 right-4 bg-[#1c41d8] text-white px-3 py-1 rounded-full text-xs font-bold">
                أخبار
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div class="flex items-center gap-1">
                  <Calendar class="w-3.5 h-3.5 text-[#efbb20]" />
                  <span>{{ item.date }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <User class="w-3.5 h-3.5 text-[#efbb20]" />
                  <span>بواسطة {{ item.author }}</span>
                </div>
              </div>

              <h2 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-relaxed group-hover:text-[#1c41d8] transition-colors">
                {{ item.title }}
              </h2>
              
              <p class="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {{ item.excerpt }}
              </p>

              <a href="#" class="inline-flex items-center text-[#1c41d8] font-bold text-sm group/btn">
                <span>إقرأ المزيد</span>
                <ArrowRight class="w-4 h-4 mr-2 transition-transform group-hover/btn:-translate-x-1" />
              </a>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-banner { position: relative; overflow: hidden; background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%); }
.hero-pattern { position: absolute; inset: 0; background-image: url('/pattern-bg.png'); background-repeat: repeat; opacity: 0.07; }
.hero-glow { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%); }
</style>
