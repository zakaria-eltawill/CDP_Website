import ContactView from '../views/ContactView.vue'
import JoinView from '../views/JoinView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import GeographicalSpreadView from '../views/GeographicalSpreadView.vue'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import AboutView from '../views/AboutView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import PublicationsView from '../views/PublicationsView.vue'
import VisionLibyaView from "@/views/VisionLibyaView.vue";
import StatementsView from "@/views/StatementsView.vue";
import StatementDetailView from "@/views/StatementDetailView.vue";
import InitiativesView from '@/views/InitiativesView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/geographical-spread',
      name: 'geographical-spread',
      component: GeographicalSpreadView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetailView,
      props: true
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/articles/:id',
      name: 'article-detail',
      component: ArticleDetailView,
      props: true
    },
    {
      path: '/publications',
      name: 'publications',
      component: PublicationsView
    },
    {
      path: '/statments',
      name: 'Statements',
      component: StatementsView
    },
    {
      path: '/initiatives',
      name: 'Initiatives',
      component: InitiativesView
    },
    {
      path: '/statments/:id',
      name: 'StatementDetail',
      component: StatementDetailView,
      props: true
    },
    {
      path: '/vision-libya',
      name: 'VisionLibya',
      component: VisionLibyaView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
