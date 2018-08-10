<template>
    <div class="about">
        <div style="position: absolute;top:-1rem;" id="qbao"></div>
        <div class="container animated wow fadeInUp">
            <h2>{{$t('about.qbao')}}</h2>
            <p>{{$t('about.qbao1')}}</p>
            <br>
            <p>{{$t('about.qbao2')}}</p>
            <video webkit-playsinline playsinline :poster="videoBg" controls height="400" width="600" id="video">
                <source src="http://vliveachy.tc.qq.com/vhot2.qqvideo.tc.qq.com/AJauRuNzDQFIkbwN55Z_pAEEMsGZvkWmSkTLFjC0AHcM/d05401lp8mb.mp4?sdtfrom=v1010&guid=d977474a11b4024b7907e46017d963e0&vkey=9BAD1320405DEC9D504B7D2D620EAEB60E207DBF24ADE092E564E6578704BDA34BD6A452EE048C0625BDEC43DC5491541536E3A238B4A4D434AD49742EF5B91C8AECF199EA443DEE75BC075B7CE48DF7F56C3D4CAA33F4EF930299FB04D00CFAC61BBFCAD393DDAD559FCC6DB8D9376A0468C8D3000863A8&ocid=2602833324&ocid=776934828" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                videoBg:require('../../assets/videoBg.jpg'),
            }
        },
        methods: {
        },
    }
</script>
<style lang="less" scoped>
    .about {
       text-align: center;
        position: relative;
        .container{
            h2{
                font-size: .2rem;
                font-weight: 400;
                margin-bottom: .4rem;
                color: #49555f;
            }
            p{
                font-size: 0.17rem;
                color: #70808D;
                font-weight: 200;
                margin-bottom: .4rem;
            }
            video{
                border-radius: 10px;
                box-shadow: 0 12px 23px 0 rgba(74, 92, 105, 0.33);
                transition: all 0.6s;
                /*background: url("../../assets/videoBg.jpg") no-repeat;*/
                /*background-size: cover;*/
            }
            video:hover{
                transform: scale(1.1);
            }
        }
    }
</style>
