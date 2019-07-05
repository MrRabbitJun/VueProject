<!--  -->
<template>
  <div>
    <!--注意：不要少了根元素-->
    <ul>
      <li
        v-for="(sport, index) in sportArr"
        :key="sport.id"
      >
        <!--<a href="#"> {{sport.title}} </a>-->
        <!--
                    要动态拼接值, 则 to 属性值是 JS 表达式, 
                    要写 JS 表达式, 则要使用 v-bind 方式绑定属性
                    注意 + 前面有单引号 ''
                -->
        <router-link :to="'/news/sport/detail/' + sport.id">
          {{sport.title}}
        </router-link>
      </li>
    </ul>

    <!--详情-->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Sports",
  data() {
    return {
      sportArr: []
    };
  },
  created() {
    this.getSportArr();
  },
  methods: {
    getSportArr() {
      axios
        .get("/static/sport.json")
        .then(response => {
          //function (response) {
          console.log(response.data, this);
          this.sportArr = response.data;
        })
        .catch(error => {
          //function (error) {
          alert(error.message);
        });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>