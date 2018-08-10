<template>
    <div class="whitepaper">
        <div style="position: absolute;top:-1rem;" id="qbaoIo"></div>
        <div class="container paper animated wow fadeInUp">
            <div class="left">
                <img src="../../assets/book.png" alt="">
                <div class="content">
                    <h2>{{$t('whitepaper.whitePaper')}}</h2>
                    <p>{{$t('whitepaper.wpIntro1')}}</p>
                    <p>{{$t('whitepaper.wpIntro2')}}</p>
                    <p v-if="$i18n.locale=='en'">{{$t('whitepaper.wpIntro3')}}</p>
                </div>
            </div>
            <div class="down">
                <a target="_blank" :href="'https://qbao.fund/qbao/qbao/resources/pdf/qbao_fund_'+LANG()+'.pdf'">
                    {{$t('whitepaper.downLoad')}}
                    <i class="iconfont icon-arrow-bottom"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        methods: {
            LANG() {
                if (this.$i18n.locale === 'zh') {
                    return 'zh-CN'
                } else {
                    return this.$i18n.locale
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .whitepaper {
        margin: .6rem auto;
        position: relative;
        .paper{
            background: #3997F8;
            padding:10px 20px;
            position: relative;
            border-radius:5px;
            color: #fff;
            .left{
                width:80%;
                display: inline-block;
                p{
                    font-size: 0.17rem;
                }
                img,.content{
                    vertical-align: middle;
                    display: inline-block;
                    line-height: 26px;
                }
                img{
                    width:100px;
                    margin-right: 10px;
                }
                .content{
                    width:77%;
                    h2{
                        font-size: 0.25rem;
                        font-weight: 300;
                    }
                }
            }
            .down:hover{
                background: #fff;
            }
            .down:hover a{
                color:#3997F8;
            }
            .down{
                border-radius:5px;
               position: absolute;
                right: 20px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                width:20%;
                height:55px;
                line-height: 33px;
                padding:10px 20px;
                border:1px solid #fff;
                text-align: center;
               a{
                   font-size: 0.17rem;
                   color:#fff;
                   i{
                       margin-left: 20px;
                   }
               }
            }
        }
    }
</style>

