<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"/>
    </div>

    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="标签名:" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove" class="moveTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem},
})


export default class EditLabel extends Vue {

  //获取当前的Tag
  get tag() {
    return this.$store.state.currentTag;
  }

  //创建Tag
  created() {
    //获取路由的id
    const id = this.$route.params.id;
    //获取Tags
    this.$store.commit('fetchTags');
    //传入当前的路由id
    this.$store.commit('setCurrentTag', id);
    //找不到当前的tag页面 返回404
    if (!this.tag) {
      this.$router.replace('/404');
    } else {
      console.log('error tag');
    }
  }

  //更新标签   需要传递当前标签的id 和修改的name
  update(name: string) {
    if (this.tag) {
      this.$store.commit('updateTag', {
        id: this.tag.id, name
      });
    }
  }

  //删除标签
  remove() {
    if (this.tag) {
      this.$store.commit('removeTag', this.tag.id);
    }
  }

  //回到上一级路径
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  background-color: #ffe459;
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {

  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
.moveTag{
  color: black;
  background-color: #ffe459;
}
</style>