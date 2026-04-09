<script setup>
import AboutSection from '../components/AboutSection.vue'
import CallToAction from '../components/CallToAction.vue'
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="pt-20 bg-gray-50/30">
    <section class="hero-banner relative py-24 md:py-32 overflow-hidden" style="background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);">
      <div class="hero-pattern absolute inset-0 opacity-[0.07] bg-repeat" :style="{ backgroundImage: `url(${baseUrl}pattern-bg.png)` }"></div>
      <div class="hero-glow absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(255,255,255,0.08),_transparent_60%)]"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">من نحن</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-2">
          تعرف على رؤيتنا ومبادئنا الوطنية لخدمة ليبيا.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <AboutSection />
    
    <!-- CTA for better closure -->
    <CallToAction />
  </div>
</template>