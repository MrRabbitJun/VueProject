<!--  -->
<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <Item
          v-for="(emp,index) in empList"
          :key="emp.id"
          :emp="emp"
        ></Item>
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "HomeList",
  props: {
    empList: Array
  },
  components: {
    Item
  }
};
</script>
<style lang='scss' scoped>
</style>