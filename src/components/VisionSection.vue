<template>
  <section class="py-24 md:py-32 bg-neutral-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <!-- Top line -->
      <div class="w-full h-px bg-gray-300 mb-16 reveal"></div>

      <!-- Golden quotation marks -->
      <div class="text-5xl text-[#efbb20] font-bold mb-6 leading-none reveal-scale" style="font-family: serif;">❝</div>

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 reveal">رؤيتنا</h2>

      <!-- Vision text with blue gradient -->
      <p class="text-xl md:text-2xl font-bold leading-relaxed md:leading-relaxed max-w-3xl mx-auto vision-text reveal">
        ليبيا الواعدة دولة تحافظ على هويتها وتواكب الحداثة وينعم أهلها بعيش كريم
      </p>

      <!-- Bottom line -->
      <div class="w-full h-px bg-gray-300 mt-16 reveal"></div>

    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<style scoped>
.vision-text {
  background: linear-gradient(135deg, #1c41d8 0%, #1a6fd4 45%, #1472dd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
