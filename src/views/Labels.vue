<template>

  <Layout>
    <header class="header">
      <div class="logo">
        <img src="../assets/cat.png" alt="招财猫记账" />
      </div>
    </header>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>

    <div class="createTag-wrapper">
      <Button class="createTag"
              @click="createTag">
        <span>新增标签</span>
      </Button>
    </div>

  </Layout>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component({
  components: {Button},
})
export default class Labels extends mixins(TagHelper) {

  get tags(){
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit('fetchTags');
  }

}
</script>

<style lang="scss" scoped>

.header{
  overflow: hidden;

  background: #ffe459;
  height: 80px;
  width: 100%;
  position: relative;

  .logo{
    img {

      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 60%;
      min-height: 60%;
      transform:translate(-50%,-50%);
    }
  }
}


.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E6E6E6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #ffe459;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  span {
    color: black;
  }
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
