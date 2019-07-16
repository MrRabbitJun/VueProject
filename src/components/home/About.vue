<!--  -->
<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1>{{AboutDetail}}</h1>
    <input
      type="text"
      v-model="AboutDetail"
    />
    <br>
    英语：
    <input
      type="text"
      v-model="englishScore"
    >
    <br>
    数学：
    <input
      type="text"
      v-model="mathScore"
    >
    <br>总分：
    <input
      type="text"
      v-model="sumScore"
    >
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      AboutDetail: "Rektec",
      mathScore: 90,
      englishScore: 90,
      sumScore: 180
    };
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // },
  watch: {
    mathScore: {
      handler: function(val) {
        this.sumScore = val - 0 + (this.englishScore - 0);
      }
    },
    englishScore: {
      handler: function(val) {
        this.sumScore = val - 0 + (this.mathScore - 0);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>