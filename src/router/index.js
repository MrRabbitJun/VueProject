import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppHome from '../components/home/AppHome.vue'
import News from '../components/home/news.vue'
import Sport from '../components/home/Sports.vue'
import Tech from '../components/home/Tech.vue'
import SportDetail from '../components/home/SportDetail.vue'
import TechDetail from '../components/home/TechDetail.vue'
import About from '../components/home/About.vue'
import Model from '../components/home/Model.vue'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style/dashboard.css'

export default new Router({
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      component: AppHome
    },
    {
      path: '/news',
      component: News,
      children: [
        // 当匹配到 /news/sport 请求时，
        // 组件 Sport 会被渲染在 News 组件中的 <router-view> 中
        {
          path: '/news/sport',
          component: Sport,
          children: [{
            path: '/news/sport/detail/:id', // :id 路径变量占位符
            component: SportDetail
          }]
        },
        // 简写方式，等价于 /news/tech 路径，注意前面没有 / ,有 / 就是根目录了
        {
          path: 'tech',
          component: Tech,
          children: [{ // 点击 栏目标题列表，查看详情
            path: '/news/tech/detail/:id',
            component: TechDetail
          }]
        },

        //点击新闻管理默认选中 新闻，
        // 就是/news后面没有子路径时, redirect 重定向到 体育 
        {
          path: '',
          redirect: '/news/sport'
        }
      ]
    },
    {
      path: '/model',
      component: Model
    },
    {
      path: '/about',
      component: About
    }
  ]
})
