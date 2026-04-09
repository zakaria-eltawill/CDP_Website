<template>
  <header :class="['sticky top-0 z-50 transition-all duration-300', scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white']" style="border-bottom: 1px solid #e5e7eb;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center gap-x-12" :class="scrolled ? 'h-[64px] lg:h-[72px]' : 'h-[72px] lg:h-[88px]'" style="transition: height 0.3s ease;">
        
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/">
            <img :class="['w-auto transition-all duration-300', scrolled ? 'h-12 lg:h-14' : 'h-14 sm:h-16 lg:h-20']" :src="`${baseUrl}logo.png`" alt="الحزب المدني الديمقراطي" />
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex items-center lg:gap-4 xl:gap-6">
          <router-link to="/" :class="[$route.path === '/' ? 'text-[#1c41d8] underline' : 'text-gray-900', 'font-extrabold text-[15px] whitespace-nowrap hover:text-[#efbb20] transition-colors duration-200 px-2 py-1 flex items-center h-full']">الرئيسية</router-link>
          
          <!-- "من نحن" with Dropdown -->
          <div class="relative group cursor-pointer text-gray-600 hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold flex items-center h-full">
            <router-link to="/about" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-100 transition-all duration-200">
              <span class="whitespace-nowrap">من نحن</span>
              <ChevronDown class="w-3 h-3 mr-1 opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:translate-y-0.5" />
            </router-link>
            
            <!-- Dropdown Menu -->
            <div class="absolute top-full right-0 mt-1 w-64 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[100] p-2">
              <router-link to="/geographical-spread" class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1c41d8] rounded-md transition-all duration-200 text-sm border-r-4 border-transparent hover:border-[#efbb20]">
                الأنتشار الجغرافي لفروع التكتل
              </router-link>
            </div>
          </div>

          <router-link to="/news" :class="[$route.path.startsWith('/news') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">
            أخبار و فعاليات
          </router-link>

          <router-link to="/articles" :class="[$route.path.startsWith('/articles') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">مقالات و آراء</router-link>
          <router-link to="/publications" :class="[$route.path.startsWith('/publications') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">منشورات</router-link>
          <router-link to="/vision-libya" :class="[$route.path.startsWith('/vision-libya') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">رؤية ليبيا الواعدة</router-link>
          <router-link to="/statments" :class="[$route.path.startsWith('/statments') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">بيانات</router-link>
          <router-link to="/initiatives" :class="[$route.path.startsWith('/initiatives') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">مبادرات</router-link>
          <router-link to="/contact" :class="[$route.path.startsWith('/contact') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">اتصل بنا</router-link>
          <router-link to="/join" :class="[$route.path.startsWith('/join') ? 'text-[#1c41d8] font-bold underline' : 'text-gray-700', 'hover:text-[#1c41d8] transition-colors duration-200 text-[13px] font-semibold px-2 py-1 rounded-md hover:bg-gray-50 whitespace-nowrap']">إنضم إلينا</router-link>
        </nav>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center">
          <button @click="mobileOpen = !mobileOpen" class="text-[#003a6a] p-2 rounded-md hover:bg-gray-100 transition-colors">
            <X v-if="mobileOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>

      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-gray-100 overflow-hidden">
          <nav class="flex flex-col py-4">
            <router-link to="/" class="px-4 py-3 text-[#1c41d8] font-bold text-base hover:bg-gray-50" @click="mobileOpen = false">الرئيسية</router-link>
            <div class="px-4 py-3 text-gray-700 font-semibold text-base border-b border-gray-50">
              <router-link to="/about" class="block" @click="mobileOpen = false">من نحن</router-link>
              <div class="mr-4 mt-2 flex flex-col gap-2">
                <router-link to="/geographical-spread" class="text-gray-500 text-sm hover:text-[#1c41d8]" @click="mobileOpen = false">الأنتشار الجغرافي لفروع التكتل</router-link>
              </div>
            </div>
            <router-link to="/news" class="px-4 py-3 text-gray-700 font-semibold text-base hover:bg-gray-50 hover:text-[#1c41d8]" @click="mobileOpen = false">أخبار و فعاليات</router-link>
            <router-link to="/articles" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]" @click="mobileOpen = false">مقالات و آراء</router-link>
            <router-link to="/publications" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]" @click="mobileOpen = false">منشورات</router-link>
            <router-link to="/vision-libya" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]" @click="mobileOpen = false">رؤية ليبيا الواعدة</router-link>
            <router-link to="/statments" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]" @click="mobileOpen = false">بيانات</router-link>
            <router-link to="/initiatives" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]" @click="mobileOpen = false">مبادرات</router-link>
            <a href="#" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]">اتصل بنا</a>
            <router-link to="/join" class="px-4 py-3 text-gray-700 font-semibold text-base hover:text-[#1c41d8]" @click="mobileOpen = false">إنضم إلينا</router-link>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const baseUrl = import.meta.env.BASE_URL

const mobileOpen = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 800px;
}
</style>
