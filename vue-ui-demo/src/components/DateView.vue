<template>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期"
    :picker-options="ranger"
  >
  </el-date-picker>
</template>

<script>
    export default {
        name: "DateView",
        data() {
          return {
            value1: '',
            ranger: {
              disabledDate(time) {
                return time < Date.now();
              }
            }
          }
        }
    }
</script>

<style scoped>

</style>
