<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="less">
    @import "./style/common.less";
    @import './style/reset.less';
    @import './style/phone.less';
    /*@import 'vue2-animate/dist/vue2-animate.min.css';*/
</style>
