
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
/* gap: 3px; */
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

.b-ribbon img {
  opacity: 0;
  animation: fade-in 1.2s forwards;
}

#b-l img {
  animation-name: fade-in-left;
}

#b-r img {
  animation-name: fade-in-right;
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
