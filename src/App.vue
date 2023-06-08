<template>
  <!-- 3.使用组件 -->
  <indexShow></indexShow>
  <logShow></logShow>
  
</template>

<script>
// 1.引入组件
import IndexShow from './components/indexShow.vue';
import LogShow from './components/logShow.vue'
export default {
  // 2.注册成局部组件
  components:{ IndexShow,LogShow },
}
</script>

<style>

</style>