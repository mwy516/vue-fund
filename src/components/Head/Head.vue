<template>
    <header class="nav" :style="{'background':gradient.navBgColor,'box-shadow':gradient.navShadow}">
        <div class="header">
            <div class="nav_menu close" v-show="showMenu" @click="hideMenu">
                <i class="iconfont icon-guanbi"></i>
            </div>
            <div class="nav_menu open" v-show="!showMenu" @click="Menu">
                <i class="iconfont icon-caidan"></i>
            </div>
            <a href="#" class="logo" v-if="gradient.navShadow=='none'"></a>
            <a href="#" class="logo1" v-else></a>
            <nav :class="{'menu':showMenu}">
                <a style="margin-right:.2rem;" v-for="item in navbar" :key="item" @click="jumbTo(item)"
                   :class="{'active':item===navItem}" :style="{'color':gradient.navColor}">
                    {{$t(item)}}
                </a>
                <a style="margin-right:10px;position: relative;" @click="showLang" :style="{'color':gradient.navColor}">
                    <i class="langIcon" v-show="nowLang=='中文'"><img src="../../assets/langicon_zh.png" alt=""></i>
                    <i class="langIcon" v-show="nowLang=='ENGLISH'"><img src="../../assets/langicon_en.png" alt=""></i>
                    <i class="langIcon" v-show="nowLang=='한국어'"><img src="../../assets/langicon_ko.png" alt=""></i>
                    {{nowLang}}
                </a>
                <div class="lang_menu" v-show="isShowLang">
                    <p @click="lang('zh')"><i class="icon_zh"></i>中文</p>
                    <p @click="lang('en')"><i class="icon_en"></i>English</p>
                    <p @click="lang('ko')"><i class="icon_ko"></i>한국어</p>
                </div>
                <div class="menu_mask" v-show="isShowLang" @click="isShowLang=false"></div>
            </nav>
        </div>
    </header>
</template>
<script>
    import bus from '../../bus';

    export default {
        data() {
            return {
                showMenu: false,
                navItem: 'head.index',
                nowLang: '中文',
                isShowLang: false,
                nowLangObj: {
                    'zh': '中文',
                    'en': 'ENGLISH',
                    'ko': '한국어'
                },
                navbar: ['head.index', 'head.qbaoIo', 'head.qbao', 'head.scenes','head.map', 'head.teams', 'head.partner', 'head.contact'],
            }
        },
        components: {},
        props: {
            gradient: {
                navBgColor: String,
                navShadow:String,
                navColor: String,
                logoShow:Boolean
            }
        },
        methods: {
            jumbTo(item) {
                this.navItem = item;
                this.$router.push('#' + item.split('.')[1])
            },
            lang(langu) {
                this.$i18n.locale = langu || 'en';
                this.isShowLang = false;
                this.nowLang = this.nowLangObj[langu];
            },
            showLang() {
                this.isShowLang = true;
            },
            Menu() {
                this.showMenu = true;
            },
            hideMenu() {
                this.showMenu = false;
            }
        }
    }
</script>
<style lang="less" scoped type="text/less">
    #app .header nav.menu{
        display: block;
    }
    .nav {
        position: fixed;
        z-index: 200;
        width: 100%;
        min-height: 50px;
        .header {
            padding: 0 10px;
            a.active{
                color:#3997F8 !important;
            }
            a {
                display: inline-block;
                cursor: pointer;
                margin-right: .2rem;
                font-size: 15px;
                color:#fff;
                font-weight: lighter;
                height: 0.7rem;
                line-height: 0.7rem;
                font-family: 'PostGrotesk-Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
                &.logo {
                    background: url("../../assets/logo.png") no-repeat center;
                    -webkit-background-size: contain;
                    background-size: contain;
                    height: 0.7rem;
                    width: 1.6rem;
                    float: left;
                }
                &.logo1 {
                    background: url("../../assets/logo1.png") no-repeat center;
                    -webkit-background-size: contain;
                    background-size: contain;
                    height: 0.7rem;
                    width: 1.6rem;
                    float: left;
                }
                &:hover {
                    color: #3997F8;
                }
            }
            .nav_menu {
                position: relative;
                float: right;
                margin: 20px 15px 8px 0;
                padding: 2px 8px;
                border-radius: 4px;
                border: 1px solid #ddd;
                background: #fff;
                display: none;
                i{
                    color:#666;
                }
            }
            nav{
                float:right;
                .langIcon{
                    position: relative;
                    left:0;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right:5px;
                    img{
                        width:22px;
                        height:16px;
                    }
                }
                .lang_menu {
                    position: absolute;
                    right: 32px;
                    top: 80px;
                    width: 130px;
                    display: inline-block;
                    background: #fff;
                    border-radius: .2em;
                    color: #000;
                    box-shadow: 0 1px 5px #d6e2ce;
                    text-align: left;
                    z-index: 200;
                    p {
                        padding: 10px 20px;
                    }
                    p:hover {
                        background-color: #f0f0f0;
                        cursor: pointer;
                    }
                    i.icon_zh,i.icon_en,i.icon_ko{
                        display: inline-block;
                        vertical-align: middle;
                        width:22px;
                        height:16px;
                        margin-right:5px;
                    }
                    i.icon_zh{
                        background: url("../../assets/langicon_zh.png") no-repeat;
                        -webkit-background-size: cover;
                        background-size: cover;
                    }
                    i.icon_en{
                        background: url("../../assets/langicon_en.png") no-repeat;
                        -webkit-background-size: cover;
                        background-size: cover;
                    }
                    i.icon_ko{
                        background: url("../../assets/langicon_ko.png") no-repeat;
                        -webkit-background-size: cover;
                        background-size: cover;
                    }
                }
            }
        }
    }
</style>

