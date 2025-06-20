
<script setup>
import heart from "~/assets/img/heart.png"

const props = defineProps({
  header:{
    default:"Letter By Vishnu."
  },
  date:{
    default:"21-05-2025"
  },
  uid:{
    default:"asdasd"
  }
})


const Router = useRouter()

function toMail() {
  Router.push(`/letters/mail?uid=${props.uid}`)
}

</script>

<template>




  <div class="mail-card">
    <img :src="heart" alt="">

   <i @click="toMail()">{{ props.header }}</i>

    <span>{{ props.date }}</span>
</div>


</template>


<style scoped>
.mail-card{
  background-color: var(--mint);
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: flex-start;
  padding: 0px 10px;
  align-items: center;
  gap: 10px;

transition: all ease-in-out 300ms;

}

.mail-card:hover{
  box-shadow: var(--shadow);
  margin-bottom: 10px;

}

i:active{
  scale: 0.97;
}
i{
  user-select: none;
border-bottom:1px solid transparent ;
transition: border ease-in-out 300ms;
}

i:hover{
border-bottom:1px solid var(--red) ;
}

span{
  margin-left: auto;
}

</style>
