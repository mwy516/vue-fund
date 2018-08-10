<template>
    <div class="index">
        <Head :gradient="gradConfig"></Head>
        <div style="padding-top: 100px;background-color: #181B2A;" v-if="guideShow">
            <Guide></Guide>
        </div>
        <div>
            <home></home>
            <white-paper></white-paper>
            <about></about>
            <features></features>
            <scenarios></scenarios>
            <product></product>
            <road-map></road-map>
            <download></download>
            <teams></teams>
            <partner></partner>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import Head from './Head/Head'
    import Home from './Home/Home'
    import WhitePaper from './WhitePaper/WhitePaper'
    import About from './About/About'
    import Features from './Features/Features'
    import Scenarios from './Scenarios/Scenarios'
    import Product from './Product/Product'
    import RoadMap from './RoadMap/RoadMap'
    import Download from './Download/Download'
    import Partner from './Partner/Partner'
    import Foot from './Foot/Foot'
    import Guide from '../components/Home/Doc.vue'
    import bus from '../bus'
    import teams from '../components/team/team.vue'

    export default {
        components: {
            RoadMap,
            Head,
            Home,
            WhitePaper,
            About,
            Features,
            Scenarios,
            Product,
            Download,
            Partner,
            Foot,
            Guide,
            teams
        },
        data() {
            return {
                guideShow: false,
                gradConfig: {
                    navBgColor: 'transparent',
                    navShadow:'transparent',
                    navColor:'transparent',
                    logoShow:true
                }
            }
        },
        methods: {
            Gradient() {
                let Hight = window.innerHeight;
                let scroll = document.documentElement.scrollTop || document.body.scrollTop;
                let width = document.documentElement.clientWidth;
                if (width < 679) {
                    this.gradConfig.navBgColor = '#fff'
                } else {
                    if (scroll <= 0) {
                        this.gradConfig.navBgColor = 'transparent';
                        this.gradConfig.navColor = '#fff';
                        this.gradConfig.navShadow='none';
                        this.logoShow=true;
                    } else if (scroll > (Hight-80)) {
                        this.logoShow=false;
                        this.gradConfig.navBgColor = '#fff';
                        this.gradConfig.navColor = '#000';
                        this.gradConfig.navShadow='0 2px 4px 0 rgba(151, 145, 151, 0.1)';
                    }
                }
            }
        },
        mounted() {
            bus.$on('guideShow', (type) => {
                this.guideShow = type;
            })
            window.addEventListener('scroll', this.Gradient)
        }
    }
</script>
<style lang="less" scoped>
    .index {
        width: 100%;
    }
</style>

