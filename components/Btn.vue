
<script setup>
const props = defineProps({
  label:{
    default:"btn"
  },callback:{
    typeof:Function
  }
})
</script>

<template>

<div class="my-btn" @click="props.callback()">
{{ props.label }}

</div>
</template>


<style >
.my-btn{
  background-color: var(--mint);
  border-radius: 10px;
  border: 1px solid black;
  font-family: var(--font-head);
  font-size: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  box-shadow: var(--shadow);
  margin: 10px;
  user-select: none;
    transition: all ease-in-out 300ms;

}



.my-btn:active{
  scale: 0.95;
}
</style>
