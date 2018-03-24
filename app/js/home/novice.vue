<template>
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">送888元红包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                        <h4 :class="$style.red">领128元新手红包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                        <h4>打白条<span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
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
}
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        >h4{
            border-bottom:1px solid #ddd;
        }
        .content{
            @include list(row);
            .item{
                width:50%;
                box-sizing: border-box;
                &:first-child{
                    text-align: center;
                    padding:32px 20px;
                    border-right:1px solid #ddd;
                    img{
                        margin:20px auto 0;
                        width:132px;
                        height:132px;
                    }
                }
                h4{
                    font-size:26px;
                    line-height:40px;
                }
                .red{
                    color:#f00;
                }
                .gray{
                    color:#999;
                    font-size:24px;
                }
                p{
                    margin-top:6px;
                    font-size:24px;
                }
                ul{
                    width:100%;
                    li{
                        width:100%;
                        padding:32px 28px;
                        box-sizing: border-box;
                        &:first-child{
                            border-bottom:1px solid #ddd;
                        }
                        h4{
                            white-space: nowrap;
                            overflow:hidden;
                            text-overflow: ellipsis;
                            text-align: left;
                        }
                        img{
                            float:right;
                            height:80px;
                            width:80px;
                        }
                    }
                }
            }
        }
    }
</style>

