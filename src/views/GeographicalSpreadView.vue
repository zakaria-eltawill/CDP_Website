<template>
  <div class="pt-20 bg-gray-50/30 min-h-screen">
    <!-- Premium Hero Section -->
    <section class="hero-banner relative py-24 md:py-32 overflow-hidden" style="background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);">
      <div class="hero-pattern absolute inset-0 opacity-[0.07] bg-repeat" :style="{ backgroundImage: `url(${baseUrl}pattern-bg.png)` }"></div>
      <div class="hero-glow absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(255,255,255,0.08),_transparent_60%)]"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">الانتشار الجغرافي لفروع التكتل</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-2">
          نصل إلى كافة ربوع الوطن لخدمة المواطن والوطن.
        </p>
      </div>
    </section>

    <!-- Main Content Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="bg-white rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center relative overflow-hidden">
        
        <!-- Decorative background dots -->
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(#003a6a 2px, transparent 2px); background-size: 30px 30px;"></div>

        <div class="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
          <div class="w-24 h-24 bg-[#003a6a]/5 rounded-full flex items-center justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#003a6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">شبكة فروعنا تتوسع باستمرار</h2>
          <p class="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg mb-8">
            نقوم حالياً بتحديث خريطة الفروع ومكاتبنا في مختلف المدن الليبية. سيتم عرض الخريطة التفاعلية هنا قريباً لتتمكن من الوصول لأقرب فرع إليك بكل سهولة.
          </p>

          <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#003a6a] to-[#1c41d8] text-white font-bold px-8 py-4 transition-transform hover:-translate-y-1 hover:shadow-lg shadow-md duration-300">
            تواصل مع الإدارة العامة
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
</style>
