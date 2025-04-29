import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/components/HomeComponent.vue'
// import About from '../views/About.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/download',
    name: 'Download',

    component: () => import('@/components/DownloadView.vue')
  }
  // Add more routes as needed
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
