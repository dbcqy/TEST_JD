<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Recommend/>
        <In/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Slider from "./rslider.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Recommend from "./recommend.vue";
import In from "./in.vue";
export default {
    //注册组件
    components:{
      Heador,
      Slider,
      In,
      Footor,
      Navbar,
      Recommend,
    }
}
</script>



