import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login'
import ManageIndex from "@/views/ManageIndex";
import Video from "@/views/children/Video";
import Advice from "@/views/children/Advice";
import Download from "@/phonePage/Download";
const routes = [
  { path: '/',
    name: 'Default',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageIndex,
    children:[
      {  path: "/video",
        component: Video,
        name: "video",
        nameZh: "视频管理",
        meta: {
          requireAuth: true
        },
      },
      {  path: "/advice",
        component:Advice,
        name: "Advice",
        nameZh: "意见管理",
        meta: {
          requireAuth: true
        },
      }

    ],
    meta: {
      requireAuth: true
    }
  },
  { path: '/download',
    name: 'download',
    component: Download
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
