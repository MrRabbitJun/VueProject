<template>
  <div id="#app">
    <!--头部导航区域-->
    <app-navbar></app-navbar>

    <!--核心区域:分左右两边-->
    <div class="container-fluid">
      <div class="row">

        <!--左边菜单栏区域-->
        <app-leaf></app-leaf>

        <!--右边主页面区域: 分上下两个区域
                <app-home>
                    <h1 slot="dashboard" class="page-header">{{title}}</h1>
                </app-home>
                -->
        <!-- 配置路由渲染组件出口 -->
        <keep-alive>
          <router-view>
            <h1
              slot="dashboard"
              class="page-header"
            >{{title}}</h1>
          </router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppLeaf from "./components/AppLeaf.vue";
import AppHome from "./components/home/AppHome.vue";
import News from "./components/home/news.vue";
import Sport from "./components/home/Sports.vue";
import Tech from "./components/home/Tech.vue";
import SportDetail from "./components/home/SportDetail.vue";
import TechDetail from "./components/home/TechDetail.vue";
import Model from "./components/home/Model.vue";
import About from "./components/home/About.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      title: "RabbitLiu's Vue.js demo"
    };
  },
  components: {
    AppNavbar,
    AppLeaf,
    AppHome
  }
};
</script>

<style>
</style>
