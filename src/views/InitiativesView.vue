<template>
  <section class="initiatives-page">
    <div class="hero relative py-24 md:py-32 overflow-hidden">
      <div class="hero-pattern"></div>
      <div class="hero-glow"></div>
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">مبادرات الحزب المدني الديمقراطي</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-2">
          التركيز على أهم المبادرات الوطنية
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="item in initiatives" :key="item.id" class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
             <!-- Default Placeholder (shows beneath image) -->
             <img src="/logo.png" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
             
             <!-- Actual Image -->
             <img
               v-if="item.img"
               :src="item.img"
               :alt="item.title"
               class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
               @error="$event.target.style.display='none'"
             />
          </div>
          
          <div class="p-6 text-right space-y-4 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] leading-snug">{{ item.title }}</h3>
            <p v-if="item.date" class="text-gray-500 text-sm mt-1 mb-2">➖ {{ item.date }}</p>
            <div class="mt-auto pt-4 flex gap-3 justify-start">
              <a :href="`/assets/initiatives/${item.pdf}`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
              <a v-if="item.pdfPreview" :href="`/assets/initiatives/${item.pdfPreview}`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full border-2 border-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#ffd200] text-sm">عرض</a>
            </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import initiatives from '@/data/initiativesData'
</script>

<style scoped>
.initiatives-page { direction: rtl; font-family: "Tajawal", sans-serif; color: #10294b; }
.hero { position: relative; min-height: 520px; display: flex; align-items: center; justify-content: center; padding: 4rem 1rem; text-align: center; overflow: hidden; background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%); }
.hero-pattern { position: absolute; inset: 0; background-image: url('/pattern-bg.png'); background-repeat: repeat; opacity: 0.07; }
.hero-glow { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%); }
</style>
