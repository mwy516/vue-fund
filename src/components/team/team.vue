<style lang="less" scoped type="text/less">
    .teams {
        margin-bottom: 1rem;
        position: relative;
        .container{
            h2{
                font-size: .25rem;
                text-align: center;
                margin-bottom: 20px;
            }
            ul {
                width:80%;
                margin:0 auto;
                display: flex;
                li{
                    flex:1;
                    border: 1px solid #DDDDDD;
                    position: relative;
                    img{
                        width:100%;
                    }
                    div{
                        padding:18px 0;
                        text-align: center;rem
                        h3{
                            font-size: .17rem;
                            color: #49555f;
                        }
                        p{
                            font-size: 0.15rem;
                            text-align: center;
                            color: #3997F8;
                        }
                    }
                    .hover1,.hover2,.hover3{
                        width:100%;
                        height:100%;
                        position: absolute;
                        background: rgba(57,151,248,0.80);
                        z-index: 100;
                        top:0;
                        padding:1rem 20px;
                        display: none;
                       p{
                           color:#fff;
                           font-size: .15rem;
                           text-align: left;
                           margin-bottom: 10px;
                       }
                    }
                }
                li:nth-child(1):hover .hover1{
                    display: block;
                }
                li:nth-child(2):hover .hover2{
                    display: block;
                }
                li:nth-child(3):hover .hover3{
                    display: block;
                }
                li:nth-child(2){
                    margin:0 4.5% 0 4.5%;
                }
            }
        }
    }
</style>

<template>
    <section class="teams">
        <div style="position: absolute;top:-1rem;" id="teams"></div>
        <div class="container animated wow fadeInUp">
            <h2>{{$t('teams.teams')}}</h2>
            <ul>
                <li>
                    <img src="../../assets/chenLin_Qbao.png" alt="陈琳">
                    <div>
                        <h3>{{$t('teams.chenlin')}}</h3>
                        <p>{{$t('teams.founder')}}</p>
                    </div>
                    <div class="hover1">
                       <p>{{$t('teams.chenlin1')}}</p>
                        <p>{{$t('teams.chenlin2')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/ruoYu_Qbao.png" alt="孙若禹">
                    <div>
                        <h3>{{$t('teams.Ruoyu')}}</h3>
                        <p>{{$t('teams.founder')}}</p>
                    </div>
                    <div class="hover2">
                        <p>{{$t('teams.ruoyu1')}}</p>
                        <p>{{$t('teams.ruoyu2')}}</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/pengFei_Qbao.png" alt="何鹏飞">
                    <div>
                        <h3>{{$t('teams.pengfei')}}</h3>
                        <p>{{$t('teams.founder')}}</p>
                    </div>
                    <div class="hover3">
                        <p>{{$t('teams.pengfei1')}}</p>
                        <p>{{$t('teams.pengfei2')}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        props: [],
        data() {
            return {}
        },
        components: {},
        computed: {},
        methods: {

        },
        mounted() {

        }
    }
</script>
