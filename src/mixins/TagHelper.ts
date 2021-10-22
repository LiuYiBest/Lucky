import Vue from 'vue';
import Component from 'vue-class-component';


const  map:{[key:string]:string}={
    'Duplicate tag name':'标签名重复了，请重新确认'
}

@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) { return window.alert('标签名不能为空'); }
        this.$store.commit('createTag', name);
        if (this.$store.state.createTagError){
            window.alert(map[this.$store.state.createTagError.message]|| 'Error')
        }
    }
}

export default TagHelper;