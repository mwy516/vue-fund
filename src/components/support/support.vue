<style lang="less" scoped type="text/less">
    .Telegram{
        display: flex;
        justify-content: flex-start;
    }
    h2,p{
        margin-left: 10px;
        line-height: 40px;
    }
    i{
        margin-right: 5px;
    }
</style>

<template>
    <div id="support">
        <h2>App Support</h2>
        <p>
            If you have any question about QbaoNetwork, you can contact us in multiple ways.
        </p>
        <h2>
            Sending Email</h2>
        <p><i class="fa fa-envelope"></i>Mail: <a href="mailto:support@qbao.fund">support@qbao.fund</a></p>
        <h2>Socail Network</h2>
        <p><i class="fa fa-weibo"></i>Weibo: <a href="https://weibo.com/6416945905/profile?topnav=1&wvr=6">@QbaoNetwork</a></p>
        <p><i class="fa fa-twitter"></i>Twitter: <a href="https://twitter.com/Qbao2339">@Qbao2339</a></p>
        <h2>Instant Messaging</h2>
        <div class="Telegram">
            <p><i class="fa fa-paper-plane"></i>Telegram: </p>
            <p>
                <a href="https://t.me/Qbaofoundation">Qbao Community CN</a><br/>
                <a href="https://t.me/QbaofoundationEn">Qbao Community EN</a>
            </p>
        </div>
    </div>
</template>

<script>
	export default {
		props: [],
		data() {
			return {}
		},
		components: {},
		computed: {},
		methods: {},
		mounted() {

		}
	}
</script>
