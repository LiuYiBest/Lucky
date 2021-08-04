<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component

export default class Types extends Vue {
  type = '-';   //-负号表示支出  +加号表示收入

  //Prop告诉Vue propA不是data是prop
  //Number告诉Vue propA运行时是个Number
  //propA是属性名
  //number | undefined 告诉TS PropA的编译时类型
  @Prop(Number) propA!: number | undefined;

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }

}


</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      //background: #333;
      border-bottom: 2px solid #333;
    }
  }
}
</style>