<style lang="less" scoped type="text/less">
    .iOS {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 1000;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 5px;
        text-align: center;
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
            margin-right: 20px;
            margin-top: 10px;
        }
        h3 {
            font-size: 20px;
            color: rgba(0, 0, 0, 0.9);
            width: 100%;
            text-align: center;
            font-weight: 400;
            > a {
                color: #999999;
                font-weight: 300;
                text-decoration: blink;
                cursor: pointer;
                text-decoration: underline;
                font-size: 14px;
            }
        }
        h4 {
            font-size: 20px;
            color: rgba(0, 0, 0, 0.4);
            width: 100%;
            text-align: center;
        }
        div {
            width: 90%;
            margin: 0 auto;
            img {
                display: block;
                margin: 0 auto;
                width: 50%;
            }
            h3 {
                width: 100%;
                text-align: center;
            }
            h4 {
                font-size: 18px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.4);
                width: 100%;
                text-align: center;
                margin-bottom: 20px;
            }
            li {
                text-align: left;
                color: red;
                width: 50%;
                margin: 0 auto;
                line-height: 0.4rem;
                a {
                    color: red;
                    text-decoration: blink;
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
            > a {
                display: inline-block;
                margin: 20px 0;
                cursor: pointer;
            }
        }
    }
</style>

<template>
    <div class="iOS animate fadeIn" v-if="iOS.show">
        <h2 @click="close">X</h2>
        <div v-show="!sss.show">
            <h3 style="margin-top: 40px;">{{$t('iosDialog.iosStore')}}</h3>
            <img src="../../assets/iosstore.png" alt="" class="img-response">
            <h4>{{$t('iosDialog.scan')}}</h4>
            <ul v-show="$i18n.locale=='zh'">
                <li>1.请使用非大陆App Store账户下载</li>
                <!--<li><a @click="guide">2.点击查看教程</a></li>-->
            </ul>
            <!--<a @click="tab">{{$t('iosDialog.iosStoreBeta')}}</a>-->
        </div>
        <div v-show="sss.show">
            <h3 style="margin-top: 40px;"> {{$t('iosDialog.iosStoreBeta')}}
                <a target="_blank" :href="'https://qbao.fund/qbao/qbao/resources/images/' + $t('iosDialog.FileNameInstruction')">{{$t('iosDialog.explainBeta')}}</a></h3>
            <img src="../../assets/iosBeta.png" alt="" class="img-response">
            <h4>{{$t('iosDialog.scan')}}</h4>
            <ul >
                <li>{{$t('iosDialog.txt1')}}</li>
                <li>{{$t('iosDialog.txt2')}}</li>
                <li>{{$t('iosDialog.txt3')}}</li>
            </ul>
            <a @click="tab">{{$t('iosDialog.store')}}</a>
        </div>
    </div>
</template>

<script>
    import bus from '../../bus'
    export default {
        props: ['iOS','sss'],
        data() {
            return {
                showBeta: false
            }
        },
        components: {},
        computed: {},
        methods: {
            guide() {
                bus.$emit('guideShow', 1);
            },
            tab() {
                this.sss.show = !this.sss.show;
            },
            close() {
                this.sss.show = false;
                this.iOS.show = false;
                bus.$emit('markShow', 0)
            }
        },
        mounted() {

        }
    }
</script>
