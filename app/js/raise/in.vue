<template>
    <Panel title="in货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.title">
                <img :src="item.img" alt="">
                <section :class="$style.list">
                    <div :class="$style.product" v-for="product in item.list" :key="product.text">
                        <img :src="product.src" alt="">
                        <p :class="$style.text">{{product.text}}</p>
                        <p :class="$style.price">{{product.price}}<em>起</em></p>
                        <article>
                            <div :class="$style.warp">
                                <div :class="$style.inner"></div>
                            </div>
                            <p :class="$style.rate">{{product.rate}}</p>
                        </article>
                        <label>精选</label>
                    </div>
                </section>
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"
export default {
    components:{
        Panel,
    },
    data(){
        return{
            items:[
                {
                    img:"//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200",
                    title:"科技",
                    list:[
                        {
                            src:"//img30.360buyimg.com/cf/jfs/t19294/292/668276493/29353/8300b483/5a9f88e6N6d95f35c.jpg",
                            text:"《仙剑奇侠传》林月如手办",
                            price:"3266",
                            rate:"170%",
                        },
                        {
                            src:"//img30.360buyimg.com/cf/jfs/t16879/74/956187518/17037/1edc6b2f/5ab36e00Nab602f91.jpg",
                            text:"一件夏日冰爽速干POLO衫",
                            price:"166",
                            rate:"89%",
                        },
                    ]
                },
                 {
                    img:"//img30.360buyimg.com/cf/jfs/t17584/163/174828705/34261/1db07e1b/5a61576bNba919551.jpg",
                    title:"生活",
                    list:[
                        {
                            src:"//img30.360buyimg.com/cf/jfs/t14296/161/2191657911/45108/fd5d79cf/5a7c4451Nda746664.jpg",
                            text:"潘尼的MOCLEGO乐构笔",
                            price:"76.00",
                            rate:"56%",
                        },
                        {
                            src:"//img30.360buyimg.com/cf/jfs/t9607/15/1302880614/10180/fc19adb/59df1ce7Nb8b50b1c.jpg",
                            text:"独美 比A4纸还轻的眼镜",
                            price:"299",
                            rate:"89%",
                        },
                    ]
                },
                 {
                    img:"//img30.360buyimg.com/cf/jfs/t17398/43/103106353/27986/c1c8b77a/5a5c6f45N0b62320d.jpg",
                    title:"智慧",
                    list:[
                        {
                            src:"//img30.360buyimg.com/cf/jfs/t18718/359/761859470/100940/8c2eabb0/5aa7685eN65bdae0a.jpg",
                            text:"一份归国觉醒的千年国魂",
                            price:"1484",
                            rate:"105%",
                        },
                        {
                            src:"//img30.360buyimg.com/cf/jfs/t16600/110/814448995/21202/4829865b/5aaa1f5eNacb3b06b.jpg",
                            text:"尊尚橄榄电动智行120公里",
                            price:"2189",
                            rate:"89%",
                        },
                    ]
                },

            ]
        }
    }
}
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include list();
            .item{
                margin-bottom:20px;
                >img{
                    width:100%;
                    display: block;
                    height:170px;
                    margin-bottom:44px;
                }
                .list{
                    @include list(row);
                    .product{
                        display: block;
                        width:50%;
                        height:396px;
                        box-sizing: border-box;
                        text-align: center;
                        background:rgba(0,0,0,.02);
                        position: relative;
                        >img{
                            width:231px;
                            height:192px;
                            margin:44px 0 10px;
                        }
                        .text{
                            font-size:28px;
                            color:#444;
                            width:231px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            text-align: center;
                            margin:0 auto;
                            margin-top:16px;
                        }
                        .price{
                            font-size:30px;
                            color:#ff3232;
                            height:48px;
                            line-height:48px;
                            &:before{
                                    content:"￥";
                                    font-size:28px;
                                    color:#ff3232;
                                }
                            em{
                                font-size:20px;
                                color:#999;
                                margin-left:4px;
                            }
                        }
                        article{
                            @include list(row);
                            align-items: center;
                            justify-content: space-around;
                            padding:0 20px;
                            height:30px;
                            line-height: 30px;
                            
                            .warp{
                                width:144px;
                                height:10px;
                                background: #f6e6e6;
                                border-radius: 22px;
                                .inner{
                                    width:40%;
                                    height:10px;
                                    background-image: linear-gradient(270deg,#f55 1%,#ff9c31 100%);
                                    border-radius: 22px;
                                }
                            }
                            .rate{
                                font-size:24px;
                                color:#999;
                            }
                        }
                        label{
                            color:#ff3232;
                            font-size:20px;
                            position: absolute;
                            top:0px;
                            left:0px;
                            background:#999;
                            padding:4px;
                        }
                    }   
                }
            }
        }
    }
</style>
