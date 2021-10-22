import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        recordList: [],
        tagList: [],
        createTagError:null,
        currentTag: undefined       //当前的Tag
    } as RootState,

    mutations: {

        //设置当前的标签    参数为传入的路由id
        setCurrentTag(state, id: string) {
            state.currentTag = state.tagList.filter(t => t.id === id)[0];
        },

        //更新标签   state.tagList就是this.data
        updateTag(state, payload: { id: string, name: string }) {
            const {id, name} = payload;
            // idList是state中对应的id值
            const idList = state.tagList.map(item => item.id);
            //如果idList的索引大于0，则获取到所有的names
            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name);
                if (names.indexOf(name) >= 0) {
                    window.alert('标签名重复了');
                } else {
                    // 找到对应的id,返回给tag，然后tag的name修改为新的name
                    const tag = state.tagList.filter(item => item.id === id)[0];
                    tag.name = name;
                    //需要通过commit存储数据
                    store.commit('saveTags');
                }
            }
        },

        //EditLabel页面删除标签
        removeTag(state, id: string) {
            let index = -1;
            //获取tagList的第i个位置上的id,找到id并赋值给index
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            // 索引上有值，则删除一个标签
            if (index >= 0) {
                state.tagList.splice(index, 1);
                //保存Tags成功
                store.commit('saveTags');
                //回退到上一次页面
                router.back();
            } else {
                window.alert('删除失败');
            }
        },

        //获取Tags标签
        fetchTags(state) {
            //获取本地存储中的tagList
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');

            //模拟Tags数据
            if (!state.tagList || state.tagList.length === 0) {
                store.commit('createTag','服装');
                store.commit('createTag','美食');
                store.commit('createTag','交通');
                store.commit('createTag','书籍');
                store.commit('createTag','生活');
                store.commit('createTag','基金');
            }
        },

        //创建一个Tag标签
        createTag(state, name: string) {
            //存储为空则报错
            state.createTagError = null;
            //获取到所有的标签名字
            const names = state.tagList.map(item => item.name);
            //如果标签名重复  则报错：标签名重复了，请重新确认
            if (names.indexOf(name) >= 0) {
                state.createTagError = new Error('Duplicate tag name');
                return;
            }
            //id为ID生成器所存储的值 需要使用toString转为字符串
            const id = createId().toString();
            // 将传递过来的 id和name添加到tagList
            state.tagList.push({id, name: name});
            //保存标签
            store.commit('saveTags');
        },

        //将tagList数据存储在本地
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },


        //Records就是Money.vue中四个组件的所记录的值
        //获取记录的值存储到本地   由于存储的是字符串，需要将JSON字符串反序列化成JSON对象
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
            // 模拟Records数据
            if (!state.recordList || state.recordList.length === 0) {
                store.commit('createRecord',{tags: [{id: "1", name: "服装"}], notes: "买衣服", type: "-", amount: 152, createdAt: "2021-10-20"});
                store.commit('createRecord',{tags: [{id: "2", name: "美食"}], notes: "吃吃吃", type: "-", amount: 34, createdAt: "2021-10-22"});


            }
        },

        //创建一个Record记录
        createRecord(state, record) {
            //创建一个record2       克隆一个record的深拷贝   使用clone方法
            const record2: RecordItem = clone(record);
            //没有时间才赋值
            record2.createdAt = record2.createdAt|| new Date().toISOString();
            //将record2的值push到recordList中
            state.recordList.push(record2);
            //存储记录数据
            store.commit('saveRecords');
        },

        //存储记录
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        }

    }
});

export default store;