<style lang="less" scoped type="text/less">
    .qq {
        width: 30%;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 2px 1px #999999;
        h2 {
            width: 30px;
            height: 30px;
            float: right;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            border: 1px solid #999999;
            color: #999999;
            border-radius: 50%;
            box-shadow: 1px 1px 2px #999999;
            margin-top: 10px;
            margin-right: 20px;
        }
        img {
            display: block;
            margin: 0 auto;
            margin-top: 60px;
            width: 80%;
        }
        h4 {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }
    }
</style>

<template>
    <div class="qq animate fadeIn" v-if="qq.show">
    <h2 @click="close">X</h2>
    <img src="../../assets/qq1.png" alt="" class="img-response">
    <h4>扫一扫加入Qbao QQ群</h4>
    </div >
</template>

<script>
    import bus from '../../bus'
	export default {
		props: ['qq'],
		data() {
			return {}
		},
		components: {},
		computed: {},
		methods: {
            close() {
                this.qq.show = false;
                bus.$emit('markShow',0)
            },
        },
		mounted() {

		}
	}
</script>
