<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider" />
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
                    href:"home",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t16192/335/2551594630/83964/64093ce3/5ab215c6N94e6936b.jpg?width=750&height=320",
                },
                {
                    href:"home",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320"
                }
                ]
        }
    },

}
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin:0px !important;
        >h4{
            display:none;
        }
        .content{
            .slider{
                margin-top:120px;
                img{
                    width:100%;
                }
            }
        }
        
    }
</style>
