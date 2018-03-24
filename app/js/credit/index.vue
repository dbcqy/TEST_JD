<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Welfare/>
        <Goods/>
        <MoreActive/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Slider from "./cslider.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Welfare from "./welfare.vue";
import Goods from "./goods.vue";
import MoreActive from "./moreActive.vue";
export default {
    //注册组件
    components:{
      Heador,
      Slider,
      Footor,
      Navbar,
      Welfare,
      Goods,
      MoreActive,
    }
}
</script>


