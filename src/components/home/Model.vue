<!--  -->
<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <!-- @submit.prevent 阻止事件的默认行为，当前阻止的是action行为 -->
    <form
      action="#"
      @submit.prevent="submitForm"
    >
      姓名(文本)：<input
        type="text"
        v-model="name"
      >
      <br><br>

      性别(单选按钮)：
      <input
        name="sex"
        type="radio"
        value="1"
        v-model="sex"
      />男
      <input
        name="sex"
        type="radio"
        value="0"
        v-model="sex"
      />女
      <br><br>

      技能(多选框)：
      <input
        type="checkbox"
        name="skills"
        value="java"
        v-model="skills"
      >Java开发
      <input
        type="checkbox"
        name="skills"
        value="vue"
        v-model="skills"
      >Vue.js开发
      <input
        type="checkbox"
        name="skills"
        value="python"
        v-model="skills"
      >Python开发
      <br><br>

      城市(下拉框)：
      <select
        name="citys"
        v-model="city"
      >
        <option
          v-for="c in citys"
          :value="c.code"
          :key="c.id"
        >
          {{c.name}}
        </option>
      </select>
      <br><br>

      说明(多行文本)：<textarea
        cols="30"
        rows="5"
        v-model="desc"
      ></textarea>
      <br><br>
      <button type="submit">提交</button>
    </form>
    <h3>测试过滤器单个参数</h3>
    <!-- 原始属性名|过滤器 -->
    <p>{{content | contentFilter}}</p>
    <input
      type="text"
      v-model="content"
    >

    <h3>测试过滤器多个参数</h3>
    <p>{{javaScore | add(vueScore, pythonScore)}}</p>
    <input
      type="Number"
      v-model="javaScore"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      sex: "1", //默认选中的是 男
      skills: ["vue", "python"], //默认选中 Vue.js开发 、Python开发
      citys: [
        { code: "bj", name: "北京" },
        { code: "sh", name: "上海" },
        { code: "sz", name: "苏州" }
      ],
      city: "sz", // 默认选中的城市：上海
      desc: "",
      content: "小伙子，tmd就是个SB",
      javaScore: 90,
      vueScore: 100,
      pythonScore: 100
    };
  },
  filters: {
    //定义局部 过滤器
    contentFilter(value) {
      // contentFilter 过滤名, value
      if (!value) {
        return "";
      }
      return value
        .toString()
        .toUpperCase()
        .replace("TMD", "***")
        .replace("SB", "***");
    },
    add(num1, num2, num3) {
      // add 过滤名， num1 其实就是引用时 | 左边的那个参数
      return num1 - 0 + (num2 - 0) + (num3 - 0);
    }
  },
  methods: {
    submitForm: function() {
      //处理提交表单
      //发送ajax异步处理
      alert(
        this.name +
          ", " +
          this.sex +
          ", " +
          this.skills +
          ", " +
          this.city +
          ", " +
          this.desc
      );
    }
  }
};
</script>
<style lang='scss' scoped>
</style>