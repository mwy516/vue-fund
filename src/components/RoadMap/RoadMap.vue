<template>
    <div class="roadMap">
        <div style="position: absolute;top:-1rem;" id="map"></div>
        <div class="container">
            <h2>{{$t('roadmap.product_line')}}</h2>
            <p>{{$t('roadmap.product_description')}}</p>
            <div class="road animated wow fadeInUp">
                <div class="line"></div>
                <div class="lineHover"></div>
                <ul class="content animated wow fadeInUp">
                    <li>
                        <div class="col" :class="{'right':width<480}">
                            <div>
                                <h3>2017/10</h3>
                                <p><i></i>{{$t('roadmap.line1710_1')}}</p>
                                <p><i></i>{{$t('roadmap.line1710_2')}}</p>
                                <i class="triangle"></i>
                            </div>
                            <span>01</span>
                        </div>
                    </li>
                    <li>
                        <div class="col right">
                            <span>02</span>
                            <div>
                                <h3>2017/11</h3>
                                <p><i></i>{{$t('roadmap.line1711_1')}}</p>
                                <p><i></i>{{$t('roadmap.line1711_2')}}</p>
                                <i class="triangle"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col" :class="{'right':width<480}">
                            <div>
                                <h3>2017/12</h3>
                                <p><i></i>{{$t('roadmap.line1712_1')}}</p>
                                <i class="triangle"></i>
                            </div>
                            <span>03</span>
                        </div>
                    </li>
                    <li>
                        <div class="col right">
                            <span>04</span>
                            <div>
                                <h3>2018/03</h3>
                                <p><i></i>{{$t('roadmap.line1803_1')}}</p>
                                <p><i></i>{{$t('roadmap.line1803_2')}}</p>
                                <p><i></i>{{$t('roadmap.line1803_3')}}</p>
                                <i class="triangle"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col" :class="{'right':width<480}">
                            <div>
                                <h3>2018/04</h3>
                                <p><i></i>{{$t('roadmap.line1804_1')}}</p>
                                <i class="triangle"></i>
                            </div>
                            <span>05</span>
                        </div>
                    </li>
                    <li>
                        <div class="col right">
                            <span>06</span>
                            <div>
                                <h3>2018/05</h3>
                                <p><i></i>{{$t('roadmap.line1805_1')}}</p>
                                <p><i></i>{{$t('roadmap.line1805_2')}}</p>
                                <i class="triangle"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col" :class="{'right':width<480}">
                            <div>
                                <h3>2018/06</h3>
                                <p><i></i>{{$t('roadmap.line1806_1')}}</p>
                                <p><i></i>{{$t('roadmap.line1806_3')}}</p>
                                <i class="triangle"></i>
                            </div>
                            <span>07</span>
                        </div>
                    </li>
                    <li>
                        <div class="col right">
                            <span>08</span>
                            <div>
                                <h3>2018/07</h3>
                                <p><i></i>{{$t('roadmap.line1807_1')}}</p>
                                <p><i></i>{{$t('roadmap.line1807_2')}}</p>
                                <p><i></i>{{$t('roadmap.line1807_3')}}</p>
                                <i class="triangle"></i>
                            </div>
                        </div>
                    </li>
                </ul>
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
        methods: {},
        computed: {
            width() {
                return window.innerWidth
            }
        },
    }
</script>
<style lang="less" scoped>
    .roadMap:hover .container .road .lineHover{
        height:92%;
    }
    .roadMap {
        overflow: hidden;
        position: relative;
        margin-bottom: 1rem;
        .container {
            h2 {
                font-family: 'PostGrotesk-Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
                font-size: .25rem;
                text-align: center;
                color: #49555f;
                line-height: 1.4rem;
            }
            p {
                font-size: .17rem;
                text-align: center;
                color: #70808D;
            }
            .road {
                width: 100%;
                margin-top: 1rem;
                position: relative;
                height: 900px;
                .line, .lineHover {
                    width: 1px;
                    position: absolute;
                    top: 0;
                    left: 50%;
                }
                .line {
                    height: 860px;
                    border: 1px solid #979797;
                }
                .lineHover {
                    height: 0;
                    transition:height 2s;
                    -moz-transition:height 2s; /* Firefox 4 */
                    -webkit-transition:height 2s; /* Safari and Chrome */
                    -o-transition:height 2s; /* Opera */
                    border: 1px solid #3997F8;
                }
                > ul.content li {
                    min-height: 110px;
                    div.col {
                        width: 50%;
                        position: relative;
                        display: inline-block;
                        > div {
                            border-radius:5px;
                            width: 90%;
                            border: 1px solid #757575;
                            padding: 10px;
                            text-align: left;
                            position: relative;
                            p {
                                font-size: .15rem;
                                text-align: left;
                                i {
                                    width: 4px;
                                    height: 4px;
                                    margin: 4px;
                                    display: inline-block;
                                    border-radius: 50%;
                                    background: #ddd;
                                }
                            }
                            h3 {
                                color: #49555f;
                                font-size: .17rem;
                            }
                            .triangle {
                                width: 0;
                                height: 0;
                                border-top: 12px solid transparent;
                                border-bottom: 12px solid transparent;
                                border-left: 12px solid #D8D8D8;
                                position: absolute;
                                right: -13px;
                                top: 10px;
                            }
                        }
                    }
                    span {
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        border-radius: 50%;
                        border: 1px solid #3997F8;
                        color: #3997F8;
                        position: absolute;
                        right: -20px;
                        background: #fff;
                        top: 0;
                        font-size: .18rem;
                    }
                }
                > ul.content li .right {
                    float: right;
                    span {
                        left: -20px;
                    }
                    > div {
                        margin-left: 10%;
                        .triangle {
                            border-top: 12px solid transparent;
                            border-bottom: 12px solid transparent;
                            border-right: 12px solid #D8D8D8;
                            border-left: 0 !important;
                            left: -13px;
                        }
                    }
                }
            }
        }
    }
</style>
