<style lang="less" scoped type="text/less">
    .androld{
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 5px;
        text-align: center;
        box-shadow: 1px 1px 2px 1px #999999;
        z-index:1000;
        h2{
            width: 30px;
            height: 30px;
            float: right;
            margin-top: 10px;
            margin-right: 20px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            border-radius: 50%;
            border: 1px solid #999999;
            box-shadow: 1px 1px 2px #999999;
            color: #999999;
        }
        h3 {
            font-size: 20px;
            color: rgba(0,0,0,0.9);
            width: 100%;
            text-align: center;
            font-weight: 400;
            >a{
                color: #999999;
                font-weight: 300;
                text-decoration: blink;
                cursor: pointer;
                text-decoration: underline;
                font-size: 14px;
            }
        }
        h4{
            font-size: 20px;
            color: rgba(0,0,0,0.4);
            width: 100%;
            text-align: center;
        }
        div {
            width: 70%;
            margin: 0 auto;
            img {
                display: block;
                margin: 0 auto;
                width: 60%;
            }
            h3 {
                width: 100%;
                text-align: center;
            }
            h4{
                font-size: 18px;
                font-weight: 400;
                color: rgba(0,0,0,0.4);
                width: 100%;
                text-align: center;
                margin-bottom: 20px;
            }
            li{
                text-align: left;
                color: red;
                width: 50%;
                margin: 0 auto;
                a{
                    color: red;
                    text-decoration: blink;
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
            >a{
                display: inline-block;
                margin: 20px 0;
                cursor: pointer;
            }
        }
    }
</style>

<template>
    <div class="androld" v-if="android.show">
        <h2 @click="close">X</h2>
        <h3 style="margin-top: 50px;">{{$t('androidDialog.and')}}</h3>
        <div>
            <img src="../../assets/android.png" alt="" class="img-response">
            <h4>{{$t('androidDialog.weichatPublic')}}</h4>
        </div>
    </div>
</template>

<script>
    import bus from '../../bus'
	export default {
		props: ['android'],
		data() {
			return {}
		},
		components: {},
		computed: {},
		methods: {
            close(){
                this.android.show = false;
                bus.$emit('markShow',0);
            }
        },
		mounted() {

		}
	}
</script>
