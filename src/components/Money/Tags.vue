<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>

<!--    选择对应索引的标签，然后修改选中标签的样式-->
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component
export default class Tags extends mixins(TagHelper) {
  //定义选中的字符串数组
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  //创建新增标签到数据仓库
  created() {
    this.$store.commit('fetchTags');
  }

  //选中和取消的标签
  toggle(tag: string) {
    //设置index为当前选中的tag索引
    const index = this.selectedTags.indexOf(tag);
    //索引大于0 则在里面
    if (index >= 0) {
      //从index后删除1个
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    //将this.selectedTags作为携带的参数  发射给外面的value事件
    this.$emit('update:value', this.selectedTags);
  }
}

</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #fff7ae;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>