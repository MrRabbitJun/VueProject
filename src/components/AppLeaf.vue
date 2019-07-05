<!--  -->
<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!--
          1. 因为 .active 样式生成在 li 标签上而不 a 标签上,
            可以通过在 router-link 标签上使用 tag 属性, 让它渲染为 li 标签
          2. 可在每个 router-link 标签上使用 active-class 属性, 指定渲染后标签上面的 CSS 类名,
              或者在 VueRouter 实例(router.js)中使用选项 linkActiveClass 全局配置生成的 CSS 类名
          3. 通过上面,发现不管点击哪一个链接, / 路由(首页)一直有高亮背景,
            因为 /foo 都会去模糊匹配 / 和 /foo, 所以 / 一直有高亮
            可在router-link 标签上使用 exact 属性, 使用开启精确匹配
        -->

      <router-link
        to="/"
        tag="li"
        exact
      >
        <a>Home</a>
      </router-link>
      <router-link
        to="/news"
        tag="li"
      >
        <a> router nesting</a>
      </router-link>
      <router-link
        to="/model"
        tag="li"
      >
        <a>Model and Filter</a>
      </router-link>
      <router-link
        to="/about"
        tag="li"
      >
        <a>About US</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
</script>
<style>
</style>