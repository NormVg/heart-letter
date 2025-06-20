
<script setup>
import Footer from '~/components/Footer.vue';

import { ref, onMounted } from 'vue';
const letters = ref([]);

const { data:ListData } = await useFetch('/api/list');

letters.value = ListData.value.data ;

console.log("dell",ListData.value);


</script>

<template>
  <BasePage/>
<Header header="Letters"/>

<div id="letter-box">

  <MailCard v-for="item in letters" :key="item.id"  :uid="item.id" :header="`Letter For ${item.from} By ${item.yours}.`"/>



</div>


<Footer/>
</template>


<style scoped>
#letter-box {
  margin: 0px 80px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
