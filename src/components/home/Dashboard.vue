<!--  -->
<template>
  <div class="row placeholders">
    <div
      v-for="(hobby, index) in hobbies"
      :key="index"
      class="col-xs-6 col-sm-3
placeholder"
    >
      <img
        src="../../../static/logo.png"
        width="200"
        height="200"
        class="img-responsive"
        alt="Generic placeholder thumbnail"
      >
      <h4>{{ hobby }}</h4>
      <span class="text-muted">
        <a
          href="#"
          @click="deleteHobby"
        >删除</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: ["hobbies"],
  methods: {
    deleteHobby(index) {
      this.$emit("delete_hobby", index);
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>