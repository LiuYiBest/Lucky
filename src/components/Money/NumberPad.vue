<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent) {
    //强制为按钮元素
    const button = (event.target as HTMLButtonElement);
    //获取输入的内容  强制断言非空
    const input = button.textContent!;
    //长度不能大于16
    if (this.output.length === 16) { return; }

    if (this.output === '0') {
      //如果是0到9的索引大于0
      if ('0123456789'.indexOf(input) >= 0) {
        //如果是数字则替换
        this.output = input;
      } else {
        //如果是点则追加
        this.output += input;
      }
      return;
    }
    //如果索引中有一个点 泽返回  没有就输入点
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);//使用slice长度减1
    }
  }

  clear() {
    this.output = '0';
  }

  //确认事件 将值传递出去  并且数字为0
  ok() {
    const number = parseFloat(this.output);
    this.$emit('update:value', number);
    this.$emit('submit', number);
    this.output = '0';
  }
}
</script>

<style lang="scss" scoped>
.numberPad {
  //background: #a4c8c0;
  background:  linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  display: flex;
  flex-direction: column;

  .output {
    font-size: 26px;
    font-family: Consolas, monospace;
    text-align: right;
    border: 1px solid #333;
    border-radius: 10px;
    background: white;
    padding: 0 5px;
    margin: 4px 2px;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-grow: 1;
    padding: 4px;
    margin: 1px 3px;

    > button {
      font-weight:bold;
      width: 20%;
      border: 2px solid #333;
      border-radius: 10px;
      background: white;
      flex-grow: 1;
      padding: 8px;
      margin: 6px;
      font-size: 16px;
      flex-shrink: 1;
    }
  }
}
//@import "~@/assets/style/helper.scss";
//.numberPad {
//  .output {
//    @extend %clearFix;
//    @extend %innerShadow;
//    font-size: 36px;
//    font-family: Consolas, monospace;
//    padding: 9px 16px;
//    text-align: right;
//    height: 72px;
//  }
//  .buttons {
//    @extend %clearFix;
//    > button {
//      width: 25%;
//      height: 64px;
//      float: left;
//      background: transparent;
//      border: none;
//      &.ok {
//        height: 64*2px;
//        float: right;
//      }
//      &.zero {
//        width: 25*2%;
//      }
//      $bg: #dde6eb;
//      &:nth-child(1) {
//        background: $bg;
//      }
//      &:nth-child(2), &:nth-child(5) {
//        background: darken($bg, 4%);
//        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//      }
//      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
//        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//        background: darken($bg, 4*2%);
//      }
//      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
//        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//        background: darken($bg, 4*3%);
//      }
//      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
//        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//        background: darken($bg, 4*4%);
//      }
//      &:nth-child(14) {
//        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//        background: darken($bg, 4*5%);
//      }
//      &:nth-child(12) {
//        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
//        background: darken($bg, 4*6%);
//      }
//    }
//  }
//}
</style>