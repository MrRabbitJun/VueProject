<!--  -->
<template>
  <tr>
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.salary}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    emp: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang='scss' scoped>
</style>