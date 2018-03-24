<template>
    <Panel :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{name:'home'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t16531/88/2488276313/43844/23edbd44/5ab0c74dN7b559f4f.jpg?width=750&height=220" alt="321会员日">
            </router-link>
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
    .panel{
        @include panel;
        h4{
            height:0px;
        }
        .content{
            padding-bottom:40px;
            img{
                display:inline-block;
                width:100%;
            }
        }
    }
</style>
