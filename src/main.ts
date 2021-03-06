import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


if (document.documentElement.clientWidth) {
    window.alert('为了预览效果，请使用手机打开招财猫记账');
    const img = document.createElement('img');
    img.src = './ma.png';
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%,-50%)';
    img.style.boxShadow = ' 0 0 10px rgba(0,0,0,0.3)';
    document.body.appendChild(img);
    img.onclick = () => {
        img.style.visibility = 'hidden';
    };
}