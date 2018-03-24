<template>
    <Panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送百元礼包</p>
                </div>
                <em>立即查看<span> > </span></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额<span> > </span></em>
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue";
export default {
    components:{
        Panel,
    }
}
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin-top:0px !important;
        .content{
            @include list();
            .item{
                @include list(row);
                align-items: center;
                height:140px;
                position:relative;
                
                >img{
                    width:88px;
                    height:88px;
                    display:inline-block;
                    margin:0 32px;
                }
                >div{
                    font-size:32px;
                    color:#333;
                    line-height:1.8;
                    p{
                        color:#999;
                        font-size:24px;
                        display:block;
                        line-height: 1.1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                >em{
                    color:#ff801a;
                    font-size: 28px;
                    position:absolute;
                    right:40px;
                    span{
                        color:#ddd;
                    }
                }
            }
        }
    }
</style>
