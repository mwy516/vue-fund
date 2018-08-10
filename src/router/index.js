import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import VueI18n from 'vue-i18n'

import Index from '../components/Index.vue'
import Doc from '../components/Home/Doc.vue'
import messages from '../i18n/translate.js'
import support from '../components/support/support.vue'
// require('../i18n/translate.js')

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/doc',
        name: 'doc',
        component: Doc
    },
    {
        path: '/support',
        name: 'support',
        component: support
    }
];

Vue.use(VueRouter);
const router = new VueRouter({
    mode: '',
    base: __dirname,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (to.hash) {
                return {selector: to.hash}
            }
        }
        // if (to.hash) {
        //     return {
        //         // 這個是透過 to.hash 的值來找到對應的元素
        //         // 照你的 html 來看是不用多加處理這樣就可以了
        //         // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        //         selector: to.hash
        //     }
        // }
    }
});

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages
});
new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#qbao_fund');
