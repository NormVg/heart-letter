
<script setup>
import Footer from '~/components/Footer.vue';

import { ref, onMounted } from 'vue';
const letters = ref([]);

const { data:ListData } = await useFetch('/api/list');

const data  = ListData.value.data

letters.value = data

// console.log("dell",ListData.value);


</script>

<template>
  <BasePage/>
<Header header="Letters"/>

<div id="letter-box">

  <MailCard v-for="item in letters" :key="item.id"  :uid="item.id" :date="item.date" :header="`Letter For ${item.from} By ${item.yours}.`"/>



</div>


<Footer/>
</template>


<style scoped>

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#letter-box > * {
  animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  /* animation-fill-mode: both; */
}


#letter-box {
  margin: 0px 80px;
  margin-top: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
