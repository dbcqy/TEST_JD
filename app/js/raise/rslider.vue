<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <img src="//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png" alt="">
            <swiper :options="options">
                <swiper-slide>百万白条卷免费送，速来领取！<em>></em></swiper-slide>
                <swiper-slide>签到领流量，一元500M！<em>></em></swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>
<script>
import{swiper,swiperSlide} from "vue-awesome-swiper";
import Panel from "../core/panel.vue";
export default {
    components:{
        Panel,
        swiper,
        swiperSlide,
    },
    data(){
        return{
            options:{
                direction: 'vertical',
                autoplay:true,
                loop:true,
            }
            
        }
    }
}
</script>

<style lang="scss">
    .swiper-container-vertical{
        height:72px;
        padding-left:178px!important;
        overflow:visible !important;
        .swiper-slide{
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color:#333;
            position: relative;
            em{
                position: absolute;
                right:20px;
                color:#ddd;
            }
        }
    }
</style>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    >h4{
        display:none;
    }
    margin-top:120px !important;
    .content{
        height:72px;
        line-height: 72px;
        overflow: hidden;
        clear:both;

        img{
            width:146px;
            float:left;
        }
    }
}
</style>

