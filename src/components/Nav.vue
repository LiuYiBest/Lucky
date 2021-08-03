<template>
  <div class="nav">
    <router-link to="/money">记账
      <Icon name="money"/>
    </router-link>
    |
    <router-link to="/labels">明细
      <Icon name="labels"/>
    </router-link>
    |
    <router-link to="/statistics">统计
      <Icon name="statistics"/>
    </router-link>
  </div>
</template>


<script lang="ts">

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
  display: flex;
}
</style>