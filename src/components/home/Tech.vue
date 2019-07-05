<!--  -->
<template>
  <div>
    <ul>
      <li
        v-for="(tech, index) in techArr"
        :key="tech.id"
      >
        <span>ID: </span>
        <span> {{ tech.id }} </span>
        <span> {{ tech.title }} </span>
        <button
          class="btn  btn-default btn-xs"
          @click="pushTech(tech.id)"
        >查看(Push)</button>&nbsp;
        <button
          class="btn btn-default btn-xs"
          @click="replaceTech(tech.id)"
        >查看(replace)</button>
      </li>
    </ul>
    <button @click="$router.back()">后退</button>
    <!--详情-->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Tech",
  data() {
    return {
      tehcArr: []
    };
  },
  created() {
    this.getTechArr();
  },
  methods: {
    getTechArr() {
      axios
        .get("/static/tech.json")
        .then(response => {
          //function (response) {
          console.log(response.data, this);
          this.techArr = response.data;
        })
        .catch(error => {
          //function (error) {
          alert(error.message);
        });
    },
    pushTech(id) {
      // push 可后退回来
      // 是 $router , 有字母 r 路由器。用的反单引号 ` ` 拼接
      this.$router.push(`/news/tech/detail/${id}`);
    },
    replaceTech(id) {
      // replace 不可后退回来
      this.$router.replace(`/news/tech/detail/${id}`);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>