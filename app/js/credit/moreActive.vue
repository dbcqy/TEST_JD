<template>
    <Panel title="更多活动" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.img">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue";
export default {
    components:{
        Panel,
    },
    data(){
        return{
            items:[
                    {
                        href:"home",
                        title:"小白卡",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135",
                    },
                    {
                        href:"home",
                        title:"白条商城",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135",
                    },
                    {
                        href:"home",
                        title:"消费分期",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135",
                    },
                    {
                        href:"home",
                        title:"借钱",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120",
                    },{
                        href:"home",
                        title:"白条提额",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                    },
                    {
                        href:"home",
                        title:"白条闪存",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135",
                    },
                    {
                        href:"home",
                        title:"小白会玩",
                        img:"https://img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135",
                    },
                    {
                        href:"home",
                        title:"钢镚",
                        img:"//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135",
                    }
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
            @include list(row);
            background: #fff;
            padding-top:40px;
            padding-bottom: 20px;
            //clear:both;
            //overflow: hidden;
            a{
                text-decoration: none;
            }
            .item{
                text-align:center;
                //width:25%;
                //float:left;
                width:160px;
                height:144px;
                margin-bottom:30px;
                img{
                    display:inline-block;
                    width:90px;
                    height:90px;
                }
                h4{
                    font-size: 26px;
                    margin-top:12px;
                    color:#666;
                }
            }
        }
    }
</style>
