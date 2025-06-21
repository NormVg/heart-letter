
<script setup>
import BasePage from '~/components/BasePage.vue';
import Header from '~/components/Header.vue';
import Btn from '../components/Btn.vue';

import roseLine from "~/assets/img/rose.png"
import ringFlow from "~/assets/img/flower-ring.png"
import Footer from '~/components/Footer.vue';

const Router = useRouter()

const sendRedirect =  (params) => {
  Router.push(params)
}

</script>

<template>

<BasePage/>

<Header header="Sweet Heart"/>
<div id="menu">
  <img :src="roseLine" alt="">
  <Btn label="Send" :callback="()=>sendRedirect('/write')"/>
  <Btn label="Our Letter’s" :callback="()=>sendRedirect('/letters')"/>
  <img :src="roseLine" alt="">

</div>

  <img :src="ringFlow" class="ring-flow">

<Footer/>
</template>


<style scoped>

#menu > * {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.7s forwards;
}

#menu > *:nth-child(1) {
  animation-delay: 0.1s;
}
#menu > *:nth-child(2) {
  animation-delay: 0.4s;
}
#menu > *:nth-child(3) {
  animation-delay: 0.7s;
}
#menu > *:nth-child(4) {
  animation-delay: 1s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

}

#menu img{
  width: 320px;
}
.ring-flow{
  width: 39%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}

.my-btn{
  width: 220px;
}

</style>
