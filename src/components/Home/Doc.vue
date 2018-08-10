<style lang="less" scoped type="text/less">
    .dec{
        background-color: #181B2A;
        border-radius: 5px;
        text-align: center;
        border-top: 1px solid transparent;
        width: 60%;
        margin: 0 auto;
        h5{
            position: fixed;
            top: 100px;
            right: 200px;
            color: #ffffff;
            font-size: 20px;
            width: 40px;
            height: 40px;
            border: 1px solid #ffffff;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            float: right;
            font-weight: 300;
            cursor: pointer;
        }
        /*margin-top: 100px;*/
        h1{
            font-size: 28px;
            text-align: center;
            color:#C7CCE6;
        }
        h2,h3,h4{
            font-size: 30px;
            white-space: normal;
            text-align: center;
            color:#C7CCE6;
            padding-top:20px;
        }
        h3{
            font-size: 15px;
            padding:30px;
        }
        h4{
            font-size: 16px;
            padding:20px;
        }
    }
    .bg1,.bg22{
        img{
            display: block;
            max-width: 80%;
            margin: 0 auto;
        }
    }
    .bg2,.bg26{
        text-align: center;
        img{
            display: block;
            max-width: 30%;
            margin: 0 auto;
        }
    }
    .bg3,.bg4,.bg5,.bg23,.bg24,.bg25{
        text-align: center;
        img{
            display: block;
            max-width: 60%;
            margin: 0 auto;
        }
    }
    .txt{
        padding:10px;
        li{
            list-style: none;
            text-align: center;
            color:#fff;
        }
    }
</style>

<template>
    <div class="dec">

        <h5 @click="closeDoc">
            X
        </h5>

        <h2 style="margin-top: 50px;">Qbao app下载流程</h2>
        <h3>如果没有香港Apple ID是无法在香港App Store下载App，以下提供两种方法获取香港Apple ID。</h3>
        <h1>第一种方法</h1>
        <h4>
            1.通过淘宝，搜索关键字“苹果、香港、ID”可选择中意商铺直接购买一个，购买成功后按照如下步骤进行操作下载Qbao App。
        </h4>
        <p class="bg2">
            <img src="../../assets/bg2.jpg" alt="">
        </p>
        <h4>
            2.点击Apple Store进入后，在Today页面右上角用户中心图标
        </h4>
        <p class="bg3">
            <img src="../../assets/bg3.jpg" alt="">
        </p>
        <h4>
            3.进入用户中心后，点击退出登录，退出后填写购买来的香港Apple ID（建议复制）与密码，输入完成后点击登录
        </h4>
        <p class="bg4">
            <img src="../../assets/bg4.jpg" alt="">
        </p>
        <h4>
            4.登录成功后，搜索“Qbao”“链信”“Qbao network”（简体繁体均可）便可搜索到Qbao，点击取得便可直接下载Qbao app。
        </h4>
        <p class="bg5">
            <img src="../../assets/bg5.jpg" alt="">
        </p>
        <!--<ul class="txt">-->
            <!--<li>香港苹果ID试用账号：</li>-->
            <!--<li>卡号：iv182opbg6@icloud.com——Qcj12gf34</li>-->
            <!--<li>卡号：iwjx1ocwp2@icloud.com——cjgfQbao520</li>-->
            <!--<li>卡号：j2aq9n837b@icloud.com——Qbao1234cjcj</li>-->
        <!--</ul>-->
        <!--<ul class="txt">-->
            <!--<li>香港苹果ID试用账号：</li>-->
            <!--<li>账号：in9v9btbm7@icloud.com</li>-->
            <!--<li>账号：in5ur5sxcs@icloud.com</li>-->
            <!--<li>账号：iofse3l9gs@icloud.com</li>-->
            <!--<li>账号：iv182opbg6@icloud.com</li>-->
            <!--<li>账号：iwjx1ocwp2@icloud.com</li>-->
            <!--<li>账号：j681156s18@icloud.com</li>-->
            <!--<li>账号：j741bpcch7@icloud.com</li>-->
            <!--<li>账号：jq87lxe9f7@icloud.com</li>-->
            <!--<li>账号：jyxomz5n9r@icloud.com</li>-->
            <!--<li>密码统一为：Qbao1234</li>-->
        <!--</ul>-->
        <h1 style="padding:30px;">第二种方法</h1>
        <h4>
            1.打开App Store，点击进去后，在Today右侧点击用户图标。
        </h4>
        <p class="bg23">
            <img src="../../assets/bg23.jpg" alt="">
        </p>
        <h4>
            2.进入App Store界面后，退出账号，点击创建新Apple ID地区选择要选择香港，邮箱可以用QQ邮箱，有时候163会收不到。
        </h4>
        <p class="bg24">
            <img src="../../assets/bg24.jpg" alt="">
        </p>
        <h4>
            3.填写资料，安全提示问题，以及填写付款方式，需要有香港电话或者信用卡/借记卡，就可以完成创建。
        </h4>
        <p class="bg25">
            <img src="../../assets/bg25.jpg" alt="">
        </p>
        <h4>
            4.注册完成后，登录成功会直接跳转至香港地区的软件商店，直接搜索Qbao可以直接下载。
        </h4>
        <p class="bg26">
            <img src="../../assets/bg26.jpg" alt="">
        </p>
    </div>
</template>

<script>
    import bus from '../../bus'
	export default {
		props: [],
		data() {
			return {}
		},
		components: {},
		computed: {},
		methods: {
            closeDoc(){
                bus.$emit('guideShow',0)
            }
        },
		mounted() {

		}
	}
</script>
