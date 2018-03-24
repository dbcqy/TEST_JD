<template>
    <Panel title="下载活动页" :class="$style.panel">
        <section :class="$style.content">
            <div></div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"
export default {
    components:{
        Panel,
    }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
body{
    background:#fff;
}
.panel{
    @include panel;
    margin:0 !important;
    
    >h4{
        display:none;
    }
    .content{
        display:block;
    }
}
</style>
