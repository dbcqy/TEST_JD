<template>
    <Panel title="广告三" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue";
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
        margin-bottom:0px;
        >h4{
            display:none;
        }
        .content{
            img{
                width:100%;
                height:170px;
                display:block;
                
            }
        }
        
    }
</style>

