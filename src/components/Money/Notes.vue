<template>
  <div>

    <label class="notes">
      <span class="name">备注</span>
      <input type="text"
             v-model="value"
             placeholder="请输入备注吧~">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  value =  '' ;
  @Watch('value')
  onValueChange(value:string){
    this.$emit('update:value',value)
  }

  onInput(event :KeyboardEvent){
    const input = event.target as HTMLButtonElement;
    this.value = input.value;
  }
}

</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>