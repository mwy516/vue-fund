<template>
    <div class="features">
        <div class="container animated wow fadeInUp">
            <ul class="left content">
                <li>
                    <h3>{{$t('features.fun1')}}</h3>
                    <p>{{$t('features.fun11')}}</p>
                </li>
                <li>
                    <h3>{{$t('features.fun2')}}</h3>
                    <p>{{$t('features.fun21')}}</p>
                </li>
            </ul>
            <div class="center content">
                <h2 class="ceil">
                    {{$t('features.fun')}}
                </h2>
            </div>
            <ul class="right content">
                <li>
                    <h3>{{$t('features.fun3')}}</h3>
                    <p>{{$t('features.fun31')}}</p>
                </li>
                <li>
                    <h3>{{$t('features.fun4')}}</h3>
                    <p>{{$t('features.fun41')}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style lang="less" scoped>
    .features {
        background: #052342;
        width:100%;
        min-height:200px;
        margin:1rem 0;
        padding:1rem 0;
        .container{
            display: flex;
            position: relative;
            .content{
                flex:1;
            }
            .left,.right{
                width:30%;
                display: inline-block;
                li{
                    border-radius:5px;
                    width:32.3%;
                    border: 1px solid #979797;
                    color: #fff;
                    padding:10px;
                    h3{
                        font-size: .17rem;
                    }
                    p{
                        font-size: 0.15rem;
                    }
                }
                li:nth-child(1){
                    position: absolute;
                    top:0;
                }
                li:nth-child(2){
                    position: absolute;
                    bottom:0;
                }
            }
            .center{
                width:40%;
                /*width:340px;*/
                /*height:340px;*/
                padding:20px;
                display: inline-block;
                background: url("../../assets/feature.png") no-repeat center center;
                background-size: cover;
                .ceil{
                    font-size: 0.25rem;
                    font-weight: 300;
                    width:80%;
                    height:100%;
                    line-height: 3rem;
                    margin:auto;
                    text-align: center;
                    border-radius: 50%;
                    color:#fff;
                    background-image: linear-gradient(to right, #13C3F9,#727DFF)
                }
            }
        }
    }
</style>
