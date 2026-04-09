<template>
  <footer class="bg-white pt-16 pb-8 border-t-4 border-gradient relative">
    <!-- Subtle top gold gradient border -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-[#ddb41e] via-[#efbb20] to-[#ddb41e]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 text-right">
        
        <!-- Right Column (Logo & Info) -->
        <div class="md:col-span-4 flex flex-col items-end">
          <img src="/logo.png" alt="الحزب المدني الديمقراطي" class="h-24 w-auto mb-6 opacity-80 hover:opacity-100 transition-opacity" />
          <p class="text-sm leading-relaxed text-gray-500 font-medium">
            الحزب المدني الديمقراطي — ليبيا الواعدة، دولة الأمن والنماء. إطار وطني يجمع المؤمنين بالدولة المدنية الديمقراطية.
          </p>
        </div>

        <!-- Center Column (Links) -->
        <div class="md:col-span-5">
          <h4 class="text-base font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#efbb20]/30 inline-block">روابط الموقع</h4>
          <div class="grid grid-cols-2 gap-y-3 gap-x-8">
            <router-link to="/" class="text-sm font-bold text-[#003a6a] hover:text-[#efbb20] transition-colors">الرئيسية</router-link>
            <a href="#" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">منشورات</a>
            <router-link to="/about" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">من نحن</router-link>
            <router-link to="/vision-libya" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">رؤية ليبيا الواعدة</router-link>
            <router-link to="/news" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">أخبار و فعاليات</router-link>
            <router-link to="/statments" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">بيانات</router-link>
            <router-link to="/articles" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">مقالات و آراء</router-link>
            <router-link to="/initiatives" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">مبادرات</router-link>
            <a href="#" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">اتصل بنا</a>
            <a href="#" class="text-sm text-gray-500 hover:text-[#003a6a] transition-colors">إنضم إلينا</a>
          </div>
        </div>

        <!-- Left Column (Social) -->
        <div class="md:col-span-3">
          <h4 class="text-base font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#efbb20]/30 inline-block">تابعنا</h4>
          <div class="flex flex-wrap gap-3">
            <a href="https://twitter.com/cdp_org_ly" target="_blank" class="w-11 h-11 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#003a6a] hover:border-[#003a6a] hover:text-white transition-all duration-200 group">
              <Twitter class="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/cdp.org.ly/" target="_blank" class="w-11 h-11 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#003a6a] hover:border-[#003a6a] hover:text-white transition-all duration-200 group">
              <Facebook class="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/civil_democratic_party/" target="_blank" class="w-11 h-11 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#003a6a] hover:border-[#003a6a] hover:text-white transition-all duration-200 group">
              <Instagram class="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@cdp.org" target="_blank" class="w-11 h-11 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#003a6a] hover:border-[#003a6a] hover:text-white transition-all duration-200 group">
              <Youtube class="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:info@cdp.org.ly" class="w-11 h-11 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#003a6a] hover:border-[#003a6a] hover:text-white transition-all duration-200 group">
              <Mail class="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      <div class="mt-14 pt-6 border-t border-gray-100">
        <p class="text-xs text-gray-400 text-center tracking-wide">
          © 2026 الحزب المدني الديمقراطي — جميع الحقوق محفوظة
        </p>
      </div>
      
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-vue-next'
</script>

<style scoped>
</style>
