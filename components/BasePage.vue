
<script setup>
import RibbonRight from "~/assets/img/marquee-right.png"
import RibbonLeft from "~/assets/img/marquee-left.png"

</script>

<template>
<div id="b-l" class="b-ribbon">
  <img :src="RibbonLeft" alt="">
    <img :src="RibbonLeft" alt="">
</div>

<div id="b-r" class="b-ribbon">
  <img :src="RibbonRight" alt="">  <img :src="RibbonRight" alt="">
</div>



</template>


<style scoped>
.b-ribbon{
/* border:  1px solid salmon; */
/* height: 100vh; */
z-index: -10;
width: max-content;
display: flex;
flex-direction: column;
gap: 10px;
overflow: visible;
}

.b-ribbon img{
  height: 100vh;
}

#b-r{
position: fixed;
top: 0;
right: 0;
}

#b-l{
position: fixed;
top: 0;
left: 0;
}


.b-ribbon {
  animation: marquee-vertical 8s linear infinite;
}

#b-r {
  animation-direction: reverse;
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
