<template>
    <div class="scenarios">
        <div style="position: absolute;top:-1rem;" id="scenes"></div>
        <div class="container animated wow fadeInUp">
            <h2>{{$t('scenarios.scenes')}}</h2>
            <ul :class="{'enHeight':$i18n.locale=='en','koHeight':$i18n.locale=='ko'}">
                <li>
                    <img src="../../assets/scenario4.png" alt="">
                    <div class="content">
                        <h3>{{$t('scenarios.title4')}}</h3>
                        <p>{{$t('scenarios.intro41')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/scenario5.png" alt="">
                    <div class="content">
                        <h3>{{$t('scenarios.title5')}}</h3>
                        <p>{{$t('scenarios.intro5')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/scenario6.png" alt="">
                    <div class="content">
                        <h3>{{$t('scenarios.title6')}}</h3>
                        <p>{{$t('scenarios.intro61')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/scenario1.png" alt="">
                    <div class="content">
                        <h3>{{$t('scenarios.title1')}}</h3>
                        <p>{{$t('scenarios.intro11')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/scenario2.png" alt="">
                    <div class="content">
                        <h3>{{$t('scenarios.title2')}}</h3>
                        <p>{{$t('scenarios.intro21')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/scenario3.png" alt="">
                    <div class="content">
                        <h3>{{$t('scenarios.title3')}}</h3>
                        <p>{{$t('scenarios.intro31')}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
            }
        },
        methods: {}
    }
</script>
<style lang="less" scoped>
    .scenarios {
        position: relative;
        margin-bottom: 1rem;
        h2{
            font-size: .25rem;
            text-align: center;
        }
        ul{
            li:hover{
                box-shadow: 0 2px 41px 0 rgba(0,0,0,0.2);
            }
            li{
                border-radius:5px;
                width:47%;
                background: #F6F7F9;
                padding:40px 20px;
                display: inline-block;
                min-height:225px;
                img{
                    width:90px;
                    margin-right: 10px;
                    vertical-align: middle;
                    display: inline-block;
                }
                .content{
                    width:70%;
                    display: inline-block;
                    vertical-align: middle;
                    min-height:135px;
                    h3{
                        font-size: .17rem;
                    }
                    p{
                        font-size: 0.15rem;
                    }
                }
            }
            li:nth-child(odd){
                margin: 2% 2% 2% 0;
            }
            li:nth-child(even){
                margin: 2% 0 2% 2%;
            }
        }
        .enHeight li .content{
            height:185px;
        }
        .koHeight li .content{
            height:165px;
        }
    }
</style>
