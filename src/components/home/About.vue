<!--  -->
<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1>{{AboutDetail}}</h1>
    <input
      type="text"
      v-model="AboutDetail"
    />
    <br>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      AboutDetail: "Rektec"
    };
  }
};
</script>
<style lang='scss' scoped>
</style>