
<script setup>
import mailImg from "~/assets/img/mail2.png"
import letterImg from "~/assets/img/letter.png"
import MarkdownRender from "~/components/MarkdownRender.vue"
const header0 = ref("Please Open Letter Love")
const header1 = ref("For My Love")

const isLetterOpen =  ref(false)

const route =  useRoute()

const mailDataRef = ref({from:"",yours:"",letter:""})

const letter = ref("")

const { data:MailData } = await useFetch('/api/read?uid='+route.query.uid);

mailDataRef.value = MailData.value.data[0] ;

console.log("dell",mailDataRef.value);

letter.value = `
\n
### For : ${mailDataRef.value.from}\n
### By : ${mailDataRef.value.yours}\n

${mailDataRef.value.letter}
`

const openMail = () => {
  console.log("mail open");
isLetterOpen.value = true
}

const closeMail = () => {
  console.log("mail close");
isLetterOpen.value = false
}





</script>

<template>

<BasePage/>
<Header :header="isLetterOpen? header1 : header0"/>

<div id="mail-box">


<Transition name="mail-fade">
  <div id="mail-img" v-if="!isLetterOpen">
    <img :src="mailImg" alt="" title="DOUBLE CLICK TO OPEN" @dblclick="openMail">
  </div>
</Transition>

<Transition name="letter-fade">
  <div id="letter-img" v-if="isLetterOpen" title="DOUBLE CLICK TO CLOSE" @dblclick="closeMail">
    <MarkdownRender :md="letter"/>
  </div>
</Transition>

</div>

<Footer/>

</template>


<style scoped>

#mail-box {
  animation: mailbox-fade-in 1.2s cubic-bezier(.55,0,.1,1);
  animation-delay: 100ms;

}

@keyframes mailbox-fade-in {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#mail-box {
  position: relative;
  margin: 0px 80px;
  height: calc(99vh - 180px);
}

#mail-img,
#letter-img {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.mail-fade-enter-active,
.mail-fade-leave-active {
  transition:
    transform 0.6s cubic-bezier(.55,0,.1,1),
    opacity 0.6s cubic-bezier(.55,0,.1,1);
}

.mail-fade-enter-from {
  opacity: 0;
  transform: scale(1.2) translateY(-40px);
}
.mail-fade-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.mail-fade-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.mail-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(60px);
}

.letter-fade-enter-active,
.letter-fade-leave-active {
  transition:
    transform 0.7s cubic-bezier(.55,0,.1,1),
    opacity 0.7s cubic-bezier(.55,0,.1,1);
  z-index: 2;
}

.letter-fade-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-60px);
}
.letter-fade-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.letter-fade-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.letter-fade-leave-to {
  opacity: 0;
  transform: scale(1.2) translateY(40px);
}

#letter-img{
  background-image: url("~/assets/img/letter2.jpg");
  height: calc(99vh - 220px);
  background-size: cover;
  border-radius: 10px;

  padding: 10px;
  overflow-y: scroll;


  margin-top: -17px;
  border: 1px solid salmon;
}

#mail-img{
  display: flex;
  justify-content: center;
  align-items: center;
}

#mail-img img{
  height: calc(99vh - 200px);
}


#mail-box{
  margin:  0px 80px;
}
</style>
