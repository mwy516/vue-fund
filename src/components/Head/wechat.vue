<style lang="less" scoped type="text/less">
    .dialog {
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
            color: #999999;
            border-radius: 50%;
            border: 1px solid #999999;
            box-shadow: 1px 1px 2px #999999;
            margin-top: 10px;
            margin-right: 20px;
        }
    }
    .dialog {
        ul {
            display: block;
            height: 38px;
            width: 90%;
            margin: 0 auto;
            margin-top: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            li {
                list-style: none;
                display: inline-block;
                height: 38px;
                a {
                    line-height: 34px;
                    text-decoration: none;
                    display: inline-block;
                    border: none;
                    color: rgba(0, 0, 0, 0.3);
                    padding: 0 20px;
                }
            }
        }
        div {
            width: 90%;
            margin: 0 auto;
            img {
                display: block;
                margin: 0 auto;
                margin-top: 10px;
                width: 80%;
            }
            h4 {
                width: 100%;
                text-align: center;
                margin-bottom: 20px;
            }
        }
        .actives {
            border-bottom: 3px solid gray;
        }
    }
</style>

<template>
    <div class="dialog animate fadeIn" v-if="anzhuo.show">
        <h2 @click="close">X</h2>
        <ul>
            <li @click="tab1"><a :class="[sss?'actives':'']">微信群</a></li>
            <li @click="tab2"><a :class="[sss?'':'actives']">微信公众号</a></li>
        </ul>
        <div v-show="!sss">
            <img src="../../assets/wechatPublic.jpg" alt="" class="img-response">
            <h4>扫一扫加入Qbao微信公众号</h4>
        </div>
        <div v-show="sss">
            <img src="../../assets/weichat.png" alt="" class="img-response">
            <h4>扫一扫加入Qbao微信群</h4>
        </div>
    </div>
</template>

<script>
    import bus from '../../bus'
	export default {
		props: ['anzhuo','mark'],
		data() {
			return {
                sss: false
            }
		},
		components: {},
		computed: {},
		methods: {
            close() {
                this.anzhuo.show = false;
                bus.$emit('markShow',0)
            },
            tab1() {
                this.sss = true;
            },
            tab2() {
                this.sss = false;
            },
        },
		mounted() {

		}
	}
</script>
