<template>
  <div class="nav-wrapper">
    <div class="content">
      <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
        <div class="content" :class="classPrefix && `${classPrefix}-content`   ">
          <slot/>
        </div>
        <Nav/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    overflow: auto;
    flex-grow: 1;
  }
}
</style>