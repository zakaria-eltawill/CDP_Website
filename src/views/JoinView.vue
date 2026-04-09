<template>
  <div class="join-page min-h-screen flex items-center justify-center relative overflow-hidden" dir="rtl">
    <!-- Background Design -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#003a6a] via-[#0f3c5f] to-[#1c41d8]"></div>
    
    <!-- Abstract shapes -->
    <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#ffd200] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
    <div class="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#ffffff] rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse-slow-delayed"></div>
    <div class="absolute inset-0 opacity-[0.06]" style="background-image: url('/pattern-bg.png'); background-repeat: repeat;"></div>

    <!-- Main Content Card -->
    <div class="relative z-10 w-full max-w-2xl px-4 sm:px-6">
      <div class="glass-card rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
        
        <!-- Elegant Border Glow -->
        <div class="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl pointer-events-none"></div>

        <!-- Icon -->
        <div class="mx-auto w-24 h-24 bg-gradient-to-br from-[#ffd200] to-[#f4b713] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,210,0,0.4)] mb-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <svg class="w-12 h-12 text-[#003a6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>

        <!-- Typography -->
        <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md leading-tight">
          نموذج إنتساب الأعضاء
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 font-medium mb-12">
          اضغط علي الرابط أدناه لتعبئة بيانات الاعضاء والإنضمام إلينا
        </p>

        <!-- CTA Button -->
        <a 
          href="https://cdp.asaas.ly/join" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-4 px-10 font-bold text-[#003a6a] bg-[#ffd200] text-xl shadow-[0_12px_30px_rgba(255,210,0,0.3)] hover:shadow-[0_20px_40px_rgba(255,210,0,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
        >
          <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span class="relative flex items-center gap-3">
            <span>الانتقال لنموذج التسجيل</span>
            <svg class="w-6 h-6 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>

        <!-- Helper Text -->
        <p class="mt-8 text-sm text-blue-200/80">
          سيتم توجيهك إلى منصة التسجيل الآمنة الخاصة بنا
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.join-page {
  font-family: 'Tajawal', sans-serif;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-slow-delayed {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 4s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.1); }
}
</style>
