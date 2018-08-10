<template>
    <div class="foot" id="contact">
        <div class="link animated wow fadeInUp">
            <div class="linkIcon">
                <a v-for="(i,index) in iconAll" :key="index" @click="iconDetail(i)">
                    <img :src="IconImg[index]" alt="">
                </a>
            </div>
            <p>
                <span>{{$t('foot.bEmail')}}</span>: bd@qbao.fund
            </p>
            <p>
                <span>{{$t('foot.cEmail')}}</span>: support@qbao.fund
            </p>
            <div class="btn">
                <a href="https://t.me/Qbaofoundation" target="_blank">
                    {{$t('foot.join_cn')}}
                </a>
                <a href="https://t.me/QbaofoundationEn" target="_blank">
                    {{$t('foot.join_en')}}
                </a>
                <a href="https://t.me/QbaocommunityKr" target="_blank">
                    {{$t('foot.join_ko')}}
                </a>
            </div>
        </div>
        <footer>Copyright © 2018 Qbao Network All rights reserved.</footer>
        <div class="mark" v-if="mark" @click="close"></div>
        <wechat :anzhuo="weiChat" :mark="mark"></wechat>
        <qqDialog :qq="qq"></qqDialog>
    </div>
</template>
<script>
    import bus from '../../bus';
    import wechat from '../Head/wechat.vue';
    import qqDialog from '../Head/qq.vue';
    export default {
        data() {
            return {
                lang: this.$i18n,
                weiChat: {
                    show: false
                },
                mark: false,
                qq: {
                    show: false
                },
                iconAll:[
                    {
                        herf: 'https://twitter.com/Qbao2339'
                    },
                    {
                        herf: 'https://www.facebook.com/Qbao-120845068623551/'
                    },
                    {
                        herf: 'https://qbao.slack.com'
                    },
                    {
                        herf: 'https://open.kakao.com/o/gRC5BDL'
                    },
                    {
                        herf: 'https://www.reddit.com/r/Qbao/'
                    },
                    {
                        herf: 'https://medium.com/@Qbao2339'
                    },
                    {
                        herf: 'https://www.instagram.com/qbaonetwork/'
                    },
                    {
                        herf: 'https://blog.naver.com/qbaonetwork'
                    },
                    {
                        herf: 'https://weibo.com/6416945905/profile?topnav=1&wvr=6'
                    },
                    {
                        className:'wechat',
                        herf: ''
                    },
                    {
                        className:'qq',
                        herf: ''
                    },
                    {
                        herf: 'mailto:support@qbao.fund'
                    }
                ],
                IconImg:[
                    require('../../assets/twitter.png'),
                    require('../../assets/facebook.png'),
                    require('../../assets/slack.png'),
                    require('../../assets/kakao.png'),
                    require('../../assets/reddit.png'),
                    require('../../assets/medium.png'),
                    require('../../assets/camera.png'),
                    require('../../assets/blog.png'),
                    require('../../assets/weibo.png'),
                    require('../../assets/weixin.png'),
                    require('../../assets/qq.png'),
                    require('../../assets/email.png')
                ]
            }
        },
        components: {
            wechat,
            qqDialog
        },
        methods: {
            close() {
                this.mark = false;
                this.weiChat.show = false;
                this.qq.show = false;
            },
            iconDetail(i) {
                if (i.herf) {
                    window.open(i.herf);
                } else {
                    if (i.className === 'wechat') {
                        this.weiChat.show = true;
                        this.mark = true;
                    } else if(i.className === 'qq') {
                        this.qq.show = true;
                        this.mark = true;
                    }
                }
            }
        },
        mounted() {
            bus.$on('markShow', (type) => {
                this.mark = type;
            })
        }
    }
</script>
<style lang="less" scoped>
    .foot {
        .link {
            padding: 30px 0;
            width: 100%;
            //height:300px;
            background: #052342;
            .linkIcon {
                text-align: center;
                margin:0 auto 30px auto;
                a:hover{
                    transform: scale(1.2);
                }
                a {
                    transition: all 0.6s;
                    display: inline-block;
                    margin-right: 20px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    img {
                        width: 30px;
                    }
                    i {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        color: #fff;
                        line-height: 30px;
                    }
                }
            }
            p {
                font-size: .15rem;
                opacity: 0.5;
                text-align: center;
                color: #fff;
                font-weight: 200;
            }
            .btn {
                margin-top: .4rem;
                text-align: center;
                a {
                    font-weight: 200;
                    border: 1px solid #FFFFFF;
                    padding: 6px;
                    margin: 0 20px;
                    color: #fff;
                    font-size: .15rem;
                    opacity: 0.5;
                    border-radius: 4px;
                }
            }
        }
        footer {
            text-align: center;
            background: #03182E;
            padding: 24px 0;
            color: #fff;
        }
    }
</style>
