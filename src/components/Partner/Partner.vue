<template>
    <div class="partner animated wow fadeInUp">
        <div style="position: absolute;top:-1rem;" id="partner"></div>
        <h2>{{$t('partner')}}</h2>
        <img src="../../assets/dd.png" alt="">
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style lang="less" scoped>
    .partner {
        position: relative;
        h2 {
            font-size: .25rem;
            text-align: center;
            margin-bottom: 20px;
        }
        img {
            width: 100%;
        }
    }
</style>


