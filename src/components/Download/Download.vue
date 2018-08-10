<template>
    <div class="download">
        <div class="container animated wow fadeInUp">
            <p>{{$t('download.product1')}}</p>
            <div class="btn">
                <div class="button " @click="andMenuShow">
                    <div class="img">
                        <i class="iconfont icon-ai-app"></i>
                    </div>
                    <div class="btnDec">
                        <p>Available on the</p>
                        <div>Android</div>
                    </div>
                    <ul class="btnMenu" v-show="andBtn">
                        <li @click="androidShow">{{$t('home.qbao')}}</li>
                        <li>
                            <a href="http://app.mi.com/details?id=com.aether.coder.qbao&ref=search">
                                {{$t('home.xiaomi')}}
                            </a>
                        </li>
                        <li>
                            <a href="https://mobile.baidu.com/item?docid=24432603&f0=search_searchContent%400_appBaseNormal%400">
                                {{$t('home.baidu')}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="button">
                    <a href="https://play.google.com/store/apps/details?id=com.aether.coder.qbao" target="_blank">
                        <div class="img">
                            <i class="iconfont icon-google-play" style="font-size: 38px;"></i>
                        </div>
                        <div class="btnDec">
                            <p>GET IT ON</p>
                            <div>Google Play</div>
                        </div>
                    </a>
                </div>
                <div class="button" @click="iosShow">
                    <div class="img">
                        <i class="iconfont icon-ios"></i>
                    </div>
                    <div class="btnDec">
                        <p>Download on the</p>
                        <div>AppStore</div>
                    </div>
                </div>
            </div>
        </div>
    <androidDialog :android="android"></androidDialog>
    <iOSDialog :iOS="iOS" :sss="ss"></iOSDialog>
    <div class="mark" v-if="mark" @click="close"></div>
    </div>
</template>
<script>
    import Guide from '../Home/Doc.vue';
    import bus from '../../bus';
    import androidDialog from '../Home/Android.vue';
    import iOSDialog from '../Home/iOS.vue';

    export default {
        components: {
            androidDialog,
            iOSDialog
        },
        data() {
            return {
                ss: {
                    show: false
                },
                isActive: false,
                android: {
                    show: false
                },
                iOS: {
                    show: false
                },
                mark: false,
                andBtn: false
            }
        },
        methods: {
            close() {
                this.ss.show = false;
                this.android.show = false;
                this.mark = false;
                this.iOS.show = false;
                this.andBtn=false;
            },
            andMenuShow() {
                this.andBtn = true;
                this.mark = true;
            },
            androidShow() {
                let width = document.documentElement.clientWidth;
                if (width < 678) {
                    window.location.href = "https://api.aethercoder.com/file/download/pkg/QBaoNetwork.apk"
                } else {
                    this.android.show = true;
                    this.mark = true;
                }
            },
            iosShow() {
                let width = document.documentElement.clientWidth
                if (width < 678) {
                    window.location.href = "https://itunes.apple.com/cn/app/id1333370260"
                } else {
                    this.iOS.show = true;
                    this.mark = true;
                }
            }
        },
        mounted() {
            bus.$on('markShow', (type) => {
                this.mark = type;
                this.andBtn =false;
            })
        }
    }
</script>
<style lang="less" scoped type="text/less">
    @import "../../style/common.less";
    .download {
        width: 100%;
        min-height: 260px;
        background: #052342;
        margin-bottom: 1rem;
        padding: .5rem;
        .container {
            p {
                color: #fff;
                font-size: .17rem;
                text-align: center;
            }
            .btn {
                margin:.5rem auto 0 auto;
                display: table;
                .button:hover{
                    background: #000;
                }
                .button:hover .img i,.button:hover .btnDec,.button:hover .btnDec p{
                    color: #fff;
                }
                .button:nth-child(2){
                    margin:0 37px;
                }
                .button {
                    display: inline-block;
                    border-radius:5px;
                    cursor: pointer;
                    height: .52rem;
                    padding: 4px 6px;
                    background: #fff;
                    color: #000;
                    min-width: 186px;
                    max-width: 234px;
                    position: relative;
                    .btnMenu {
                        text-align: center;
                        z-index: 2;
                        position: absolute;
                        background: #fff;
                        width: 100%;
                        border-radius: 5px;
                        padding: 20px 0;
                        li {
                            height: 40px;
                            line-height: 40px;
                        }
                        li:hover{
                            background: #000;
                            color:#fff;
                        }
                    }
                    .img {
                        display: inline-block;
                        margin-right: 4px;
                        i{
                            font-size: 34px;
                            color:#000;
                            position: relative;
                            top:-6px;
                        }
                    }
                    .btnDec {
                        color: #000;
                        text-align: left;
                        display: inline-block;
                        p {
                            color:#000;
                            font-size: .13rem;
                        }
                        div {
                            font-size: .21rem;
                            position: relative;
                            top: -3px;
                        }
                    }
                }
            }
        }
        .mark {
            .x-mark;
            z-index: 1;
        }
    }
</style>
