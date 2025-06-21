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

  txt.value = txt.value.replace(/\r\n|\r/g, "\n");

  // console.log("txt:", txt.value);
  // console.log("from:", from.value);
  // console.log("yours:", yours.value);

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

const selectedEmoji = ref()
const showEmojiPicker =ref(false)


const onSelectEmoji = (emoji) => {
  selectedEmoji.value = emoji.i
  // txt.value += emoji.i;

  const textarea = document.querySelector("textarea.heart-input");
  if (textarea) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = txt.value.slice(0, start);
    const after = txt.value.slice(end);
    txt.value = before + emoji.i + after;
    nextTick(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + emoji.i.length;
    });
  }
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
        <option value="Vishnu">Vishnu</option>
        <option value="Sakshi">Sakshi</option>
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

    <button
      @click="showEmojiPicker = !showEmojiPicker"
      style="margin-bottom: 12px;"
    >
    {{ showEmojiPicker?'Close Emoji':'Open Emoji' }}

    </button>
    <NuxtEmojiPicker
      v-if="showEmojiPicker"
      :hide-search="false"
      theme="light"
      @select="onSelectEmoji"
    />
    <textarea
      v-model="txt"
      rows="10"
      class="heart-input"
      placeholder="Write your letter here..."
      style="width: 100%; resize: vertical; margin-bottom: 16px;"
    ></textarea>




  </div>
  <Footer/>
</template>

<style scoped>

button{
  background-color: var(--mint);
  border-radius: 5px;
  border: 1px solid black;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  box-shadow: var(--shadow);
  margin: 10px;
  user-select: none;
  transition: all ease-in-out 300ms;

}



button:active{
  scale: 0.95;
}

#save-box {
  opacity: 0;
  animation: fadeInSaveBox 0.8s ease 0.8s forwards;
}

@keyframes fadeInSaveBox {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#write-box {
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

textarea.heart-input {
  min-height: 180px;
  font-size: 18px;
  font-family: var(--font);
  line-height: 1.6;
  padding: 14px;
  border-radius: 10px;
  border: 1.5px solid #bbb;
  /* background: var(--mint); */
  background-image: url("~/assets/img/letter2.jpg");
  margin-top: 10px;
  box-shadow: var(--shadow);
  transition: border-color 0.2s;
}

textarea.heart-input:focus {
  outline: none;
  border-color: var(--red);

}

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
  font-size: 30px;
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
