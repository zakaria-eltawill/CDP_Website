<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col font-almarai bg-white text-gray-900" dir="rtl">
    <AppHeader />

    <main class="flex-grow">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');

html, body {
  font-family: 'Almarai', sans-serif;
}
</style>
