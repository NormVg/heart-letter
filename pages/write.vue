<script setup>
import { Codemirror } from "vue-codemirror";
import { ctpMocha } from "~/utils/theme.js";

import ringFlow from "~/assets/img/flower-ring.png"
import Btn from "../components/Btn.vue";
import Footer from "~/components/Footer.vue";

const txt = ref("");
const from = ref("")
const yours = ref("")

const isProcessing = ref(false)

const submitForm = async () => {

  if (isProcessing.value) {
    return
  }

  console.log("txt:", txt.value);
  console.log("from:", from.value);
  console.log("yours:", yours.value);

  const body = {
    from: from.value,
    yours: yours.value,
    letter: txt.value
  };

  await $fetch("/api/create", {
    method: "POST",
    body
  });

  alert("Submitted successfully!")
  from.value = "";
  yours.value = "";
  txt.value = "";
}

</script>

<template>
  <BasePage />

  <Header header="My Heart" />
  <div id="write-box">
    <div class="heart-input-container">
      <label for="heart-input" class="heart-input-label">For :</label>
      <select v-model="from">
        <option value="" disabled selected>Select Person</option>
        <option value="vishnu">Vishnu</option>
        <option value="sakshi">Sakshi</option>
      </select>
    </div>

    <div class="heart-input-container">
      <label for="heart-input" class="heart-input-label">Yours :</label>
      <input
      v-model="yours"
        id="heart-input"
        type="text"
        class="heart-input"
        placeholder="yours..."
      />
    </div>

    <div id="save-box">
      <img :src="ringFlow" alt="">
      <Btn label="Send" :callback="submitForm" />
    </div>


    <label for="heart-input" class="heart-input-label">Letter :</label>

    <Codemirror
      :extensions="[ctpMocha]"
      v-model="txt"
      :style="{ height: '100vh', marginLeft: '1px' }"
    />
  </div>
  <Footer/>
</template>

<style scoped>


#save-box{

  position: absolute;

  top: 200px;
  right: 100px;

  height: 200px;
  width: 200px;

}

#save-box img{
  position: relative;
  height: 100%;
  animation: rotate 20s linear infinite;
}

#save-box .my-btn{

position: relative;
top: -135px;

}

#write-box {
  margin: 0px 80px;
  margin-bottom: 100px;
}

select,
.heart-input {
  background-color: var(--mint, #f9f9f9);
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
  box-shadow: var(--shadow);
  /* transition: all ease-in-out 300ms; */
}

.heart-input-label,
.select-label {
  display: block;
  margin-bottom: 6px;
  font-size: 25px;
  /* font-weight: bold; */
  font-family: var(--font-head);
}

.heart-input-container {
  /* margin-bottom: 24px; */
  width: 300px;
}



@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform:  rotate(360deg);
  }
}
</style>
