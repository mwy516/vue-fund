<template>
    <div class="product">
        <div class="img animated wow fadeInUp">
            <img src="../../assets/product.png" alt="">
        </div>
        <div class="img1 animated wow fadeInUp">
            <img src="../../assets/productBg.png" alt="">
        </div>
        <div class="product-content animated wow fadeInUp">
            <div class="center">
                <div class="circle">
                    <div class="pixi-item item-1">
                        <div class="inner">
                            <div class="icon">
                                <img src="../../assets/p10.png" alt="">
                            </div>
                            <p class="title">{{$t('product.trust')}}</p>
                        </div>
                    </div>
                    <div class="pixi-item item-2">
                        <div class="inner">
                            <div class="icon">
                                <img src="../../assets/p9.png" alt="">
                            </div>
                            <p class="title">{{$t('product.know')}}</p>
                        </div>
                    </div>
                    <div class="pixi-item item-3">
                        <div class="inner">
                            <div class="icon">
                                <img src="../../assets/p8.png" alt="">
                            </div>
                            <p class="title">{{$t('product.pay')}}</p>
                        </div>
                    </div>
                    <div class="pixi-item item-4">
                        <div class="inner">
                            <div class="icon">
                                <img src="../../assets/p7.png" alt="">
                            </div>
                            <p class="title">{{$t('product.content')}}</p>
                        </div>
                    </div>
                    <div class="pixi-item item-5">
                        <div class="inner">
                            <div class="icon">
                                <img src="../../assets/p6.png" alt="">
                            </div>
                            <p class="title">{{$t('product.engine')}}</p>
                        </div>
                    </div>
                    <div class="pixi-item item-6">
                        <div class="inner">
                            <p class="title">{{$t('product.smart')}}</p>
                            <div class="icon">
                                <img src="../../assets/p5.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pixi-item item-7">
                        <div class="inner">
                            <p class="title">{{$t('product.shop')}}</p>
                            <div class="icon">
                                <img src="../../assets/p4.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pixi-item item-8">
                        <div class="inner">
                            <p class="title">{{$t('product.center')}}</p>
                            <div class="icon">
                                <img src="../../assets/p3.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pixi-item item-9">
                        <div class="inner">
                            <p class="title">{{$t('product.comm')}}</p>
                            <div class="icon">
                                <img src="../../assets/p2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pixi-item item-10">
                        <div class="inner">
                            <p class="title">{{$t('product.vip')}}</p>
                            <div class="icon">
                                <img src="../../assets/p1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
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
        methods: {}
    }
</script>
<style lang="less" scoped>
    .product {
        width: 100%;
        //height: 700px;
        position: relative;
        margin-bottom: 2rem;
        background: #3997F8;
        padding-top: 60px;
        .img1, .img {
            position: absolute;
            z-index: 10;
            bottom: 0;
            width: 40%;
            left: 30%;
            img {
                width: 100%;
            }
        }
        .img {
            z-index: 20;
            bottom: -1rem;
        }
        .product-content {
            z-index: 30;
            position: relative;
            width: 80%;
            margin: 0 auto;
            padding: 40px 0;
        }
        .center {
            // background: #fff;
            width: 100%;
            margin: 0 auto;
            padding-top: 50px;
            height: 540px;
            overflow: hidden;
            .circle {
                border: 4px solid #fff;
                width: 900px;
                height: 900px;
                z-index: 200;
                position: relative;
                margin: 0 auto;
                border-radius: 450px;
                .pixi-item {
                    position: absolute;
                    z-index: 1000;
                    .inner {
                        min-width: 250px;
                        text-align: center;
                        transition: all 0.6s;
                        .icon {
                            width: 90px;
                            height: 90px;
                            border-radius: 50%;
                            background: #fff;
                            padding: 10px;
                            display: inline-block;
                            //margin: 0 auto 10px auto;
                            vertical-align: middle;
                            margin-right: 20px;
                            img {
                                width: 100%;
                            }
                        }
                        p {
                            color: #fff;
                            text-align: center;
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 20px;
                        }
                    }
                }
                .pixi-item .inner:hover {
                    transform: scale(1.1);
                }
                .item-1 {
                    right: -206px;
                    top: 365px;
                }
                .item-2 {
                    right: -163px;
                    top: 235px;
                }
                .item-3 {
                    right: -92px;
                    top: 114px;
                }
                .item-4 {
                    right: 8px;
                    top: 22px;
                }
                .item-5 {
                    right: 167px;
                    top: -42px;
                }
                .item-6 {
                    left: 198px;
                    top: -42px;
                }
                .item-7 {
                    left: 60px;
                    top: 22px;
                }
                .item-8 {
                    left: -57px;
                    top: 114px;
                }
                .item-9 {
                    left: -142px;
                    top: 235px;
                }
                .item-10 {
                    left: -197px;
                    top: 365px;
                }
            }
        }
    }
</style>
