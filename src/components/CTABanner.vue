<template>
  <section class="relative py-24 md:py-32 overflow-hidden" style="background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);">
    <!-- Pattern -->
    <div class="absolute inset-0 opacity-[0.07]" style="background-image: url('/pattern-bg.png'); background-repeat: repeat;"></div>
    <!-- Glow -->
    <div class="absolute inset-0" style="background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%);"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-12 leading-snug md:leading-snug">نثق في قدرتنا على بناء دولتنا</h2>
      <a href="#" class="inline-flex items-center justify-center px-12 py-4 bg-[#ffd200] text-[#003a6a] font-bold text-lg rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#ffe033] active:translate-y-px transition-all duration-300">
        اعرف المزيد
      </a>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<style scoped>
</style>
