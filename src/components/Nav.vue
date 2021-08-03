<template>
  <nav class="nav">
    <router-link to="/money" class="item">
      <Icon  name="money"/>
      <span>记账</span>
    </router-link>
    |
    <router-link to="/labels" class="item">
      <Icon name="labels"/>
      <span>明细</span>
    </router-link>
    |
    <router-link to="/statistics" class="item">
      <Icon name="statistics"/>
      <span>统计</span>
    </router-link>
  </nav>
</template>


<script lang="ts">

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
.nav {
  //给框添加阴影
  display: flex;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  > .item {
    padding: 2px;
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      width: 32px;
      height: 32px;
    }
  }
}

</style>