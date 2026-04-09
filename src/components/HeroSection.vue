<template>
  <section class="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center bg-gray-900">
    
    <!-- Background Image (Group Photo) -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hero-zoom" :style="{ backgroundImage: `url(${baseUrl}hero-bg.jpeg)` }"></div>

    <!-- Dark Overlay for Contrast -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Text content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-32">
      <div class="flex flex-col items-center text-center">
        
        <!-- Heading with high contrast gold color and strong shadow -->
        <h1 class="hero-title text-2xl sm:text-3xl md:text-5xl font-extrabold mb-10 leading-tight">
          <span class="text-[#ffd200] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] drop-shadow-[0_0_12px_rgba(255,210,0,0.3)] px-4">
            ليبيا الواعدة .. دولة الأمن و النماء
          </span>
        </h1>

        <!-- Yellow Button with Black Text -->
        <div class="hero-btn mt-8">
          <router-link to="/join" class="inline-flex items-center justify-center px-12 py-4 bg-[#ffd200] text-gray-900 font-extrabold text-xl rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300">
            انضم الينا
          </router-link>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-title {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-btn {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-zoom {
  animation: heroZoom 20s infinite alternate ease-in-out;
}

@keyframes heroZoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}
</style>
