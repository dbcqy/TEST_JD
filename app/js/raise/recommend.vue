<template>
    <Panel title="今日推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">什么是众筹</div>
            <Slider :options="options" :items="items" cname="recommend-slider"/>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
    components:{
        Panel,
        Slider,
    },
    data(){
        return{
            items:[
                {
                    show:true,
                    href:"home",
                    src:"//img30.360buyimg.com/cf/jfs/t16636/270/840090527/32175/fdd0002e/5aac8324N92585005.jpg",
                    title:"呼噜圈智能鼾声伴侣眼罩",
                    text:"超值档：￥199",
                    rate:"",  
                },
                {
                    show:true,
                    href:"home",
                    src:"//img30.360buyimg.com/cf/jfs/t14776/2/2451443954/18527/3ee1cb46/5aa220a2Nefe1223d.jpg",
                    title:"大白牛车智能念佛计数云戒",
                    text:"超值档：￥29",
                    rate:"减满", 
                },
                {
                    show:true,
                    href:"home",
                    src:"//img30.360buyimg.com/cf/jfs/t15685/16/2253167306/7700/b4c7ca4e/5a9e607fN6820fe9a.jpg",
                    title:"轻商务竹影青花旅行茶具",
                    text:"超值档：￥469",
                    rate:"", 
                },
                {
                    show:true,
                    href:"home",
                    src:"//img30.360buyimg.com/cf/jfs/t14773/315/2306375333/12096/ee83fabd/5a93e752N3ce6b5af.png",
                    title:"GPD迷你掌上游戏电脑",
                    text:"超值档：￥3789",
                    rate:"", 
                },
            ],
            options:{
                slidesPerView: 2.3,
                spaceBetween: 36,
                freeMode: true,
            }
            
        }
    }
}
</script>
<style lang="scss">
.recommend-slider{
        .swiper-container{
            padding:0 24px;
            box-sizing:border-box;
            .swiper-slide{
                
                a{
                    display:inline-block;
                    text-decoration: none;
                    width:100%;
                    img{
                        width:100%;
                        display:block;
                        height:204px;   
                    }
                    dl{
                        dt{
                            width:258px;;
                            font-size:21px;
                            color:#443c3d;
                            margin-top:12px;
                            font-family: "Microsoft YaHei";   
                            letter-spacing: 3px;  
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;                
                        }
                        dd{
                            width:258px;
                            font-size:21px;
                            color:#E13045;
                            margin-top:12px;
                            font-family: "Microsoft YaHei";   
                            letter-spacing: 3px; 
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            &:last-child{
                                background:#e3b15e; 
                                font-size:24px;
                                line-height: 1.2;
                                border-radius: 5px;
                                color:#fff;
                                width:60px;
                                padding:2px 12px; 

                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom:40px;
            position: relative;
            &>div{
                position: absolute;
                font-size:28px;
                color:#999;
                right:20px;
                top:-70px;
            }
        }

    }
</style>
