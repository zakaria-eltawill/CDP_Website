<script setup>
import { useReveal } from '../composables/useReveal'
import { Calendar, User, ArrowRight } from 'lucide-vue-next'
import { articlesData } from '../data/articlesData'

useReveal()
</script>

<template>
  <div class="pt-20">
    <!-- Articles Hero -->
    <section class="hero-banner relative py-16 md:py-24 text-white overflow-hidden">
      <div class="hero-pattern"></div>
      <div class="hero-glow"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 reveal">مقالات و آراء</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-8 reveal-scale"></div>
        <p class="text-xl opacity-90 max-w-2xl mx-auto reveal" style="transition-delay: 200ms;">
          مجموعة من المقالات والآراء السياسية والفكرية لقيادات وأعضاء الحزب المدني الديمقراطي
        </p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="(article, index) in articlesData"
            :key="article.id"
            :to="{ name: 'article-detail', params: { id: article.id } }"
            class="reveal bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group block"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Image Container -->
            <div class="relative h-64 overflow-hidden">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onerror="this.src='/logo.png'"
              />
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div class="absolute bottom-4 right-4 bg-[#1c41d8] text-white px-3 py-1 rounded-full text-xs font-bold">
                مقالات
              </div>
            </div>
            <div class="p-6 text-right">
              <h3 class="text-lg font-bold text-gray-900 mb-4 leading-relaxed group-hover:text-[#1c41d8] transition-colors line-clamp-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center justify-start space-x-2 space-x-reverse text-sm text-gray-400">
                <div class="flex items-center gap-1">
                  <User class="w-4 h-4 text-[#efbb20]" />
                  <span>{{ article.author }}</span>
                </div>
                <span class="text-[#efbb20]">·</span>
                <div class="flex items-center gap-1">
                  <Calendar class="w-4 h-4 text-[#efbb20]" />
                  <span>{{ article.date }}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);
  color: white;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: url('/pattern-bg.png'); /* Replace with actual pattern path */
  background-repeat: repeat;
  opacity: 0.07;
  z-index: 1;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(255, 255, 255, 0.08), transparent 60%);
  z-index: 2;
}

.hero-banner .relative {
  z-index: 3;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2; /* Added for compatibility */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; /* Added for compatibility */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>