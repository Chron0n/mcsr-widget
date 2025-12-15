import SettingsPage from '@/pages/SettingsPage.vue'
import WidgetPage from '@/pages/WidgetPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/widget', component: WidgetPage },
  { path: '/', component: SettingsPage },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
