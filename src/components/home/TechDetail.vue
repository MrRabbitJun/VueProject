<!--  -->
<template>
  <div class="jumbotron">
    <h1>ID:{{techDetail.id}}</h1>
    <h2>{{techDetail.title}}</h2>
    <p>{{techDetail.content}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TechDetail",
  data() {
    return {
      id: null,
      techDetail: {}
    };
  },

  created() {
    this.getTechById();
  },

  methods: {
    // 通过 id 获取详情
    getTechById() {
      // 1. 获取路径变量 id 值
      const id = this.$route.params.id - 0;
      // 2. 获取所有数据
      axios
        .get("/static/tech.json")
        .then(response => {
          const techArr = response.data;
          // 3. 查找指定id的数据
          this.techDetail = techArr.find(tech => {
            return tech.id === id;
          });
        })
        .catch(error => {
          alert(error.message);
        });
    }
  },

  watch: {
    // 使用 watch 监听 $route 路由的变化,获取 ID 值
    $route: function() {
      this.getTechById();
      console.log("$router改变了", this.id);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>