<template>
  <div>
    <div>
      <h1>404</h1>
      <h1>你访问的路径不存在，请重新检查网站是否正确</h1>
    </div>
    <div>
      <router-link to="/">返回招财猫记账首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound'
};
</script>

<style lang="scss" scoped>

</style>