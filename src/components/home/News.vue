<!--  -->
<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills">
          <router-link
            to="/news/sport"
            tag="li"
          >
            <a>Sport</a>
          </router-link>
          <router-link
            to="/news/tech"
            tag="li"
          >
            <a>Tech</a>
          </router-link>
        </ul>
      </nav>
      <hr>
    </div>
    <!--定义路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>
</script>
<style lang='scss' scoped>
</style>