<template>
  <section class="statement-detail-page" dir="rtl">
    <div class="max-w-3xl mx-auto px-4 py-12">
      <router-link to="/statments" class="inline-block mb-6 text-[#efbb20] hover:underline font-bold">← العودة للبيانات</router-link>
      <article v-if="post">
        <header class="mb-6">
          <h1 class="text-2xl md:text-3xl font-bold text-[#0f386f] mb-2">{{ post.title }}</h1>
          <div class="text-sm text-gray-500 mb-2">{{ post.date }}</div>
          <img v-if="post.img" :src="post.img" :alt="post.title" class="w-full rounded-lg shadow mb-4" />
        </header>
        <div class="post-body prose prose-lg max-w-none" v-html="post.body"></div>
      </article>
      <div v-else class="text-center text-gray-400 py-20">لم يتم العثور على البيان.</div>
    </div>
  </section>
</template>

<script>
import posts from '@/data/statementsData'

export default {
  name: 'StatementDetailView',
  computed: {
    post() {
      const id = this.$route.params.id
      return posts.find(p => String(p.id) === String(id))
    }
  }
}
</script>

<style scoped>
.statement-detail-page { background: #f8fbff; color: #10294b; font-family: "Tajawal", sans-serif; }
.prose { direction: rtl; }
</style>
