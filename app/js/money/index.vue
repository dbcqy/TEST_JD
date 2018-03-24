<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <ADfirst/>
        <Money/>
        <ADsecond/>
        <Finance/>
        <ADthree/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Slider from "./mslider.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import ADfirst from "./adfirst.vue";
import Money from "./money.vue";
import ADsecond from "./adsecond.vue";
import Finance from "./finance.vue";
import ADthree from "./adthree.vue";
export default {
    //注册组件
    components:{
      Heador,
      Slider,
      Footor,
      Navbar,
      ADfirst,
      Money,
      ADsecond,
      Finance,
      ADthree,
    }
}
</script>
<style lang="scss">
    .mfooter{
        ul{
            li:first-child{
                display:none;
            }
        }
    }
</style>


