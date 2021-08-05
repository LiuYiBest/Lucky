import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {   //data
        count: 1111
    },
    mutations: {   //methods
        increment(state,n:number) {
            state.count+=n;
        }
    },
});

store.commit('increment',10);


export default store;

