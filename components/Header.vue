
<script setup>
const props  = defineProps({
  header:{
    default:"Headering",

  }
})
</script>

<template>

<div id="header"  >
{{ props.header }}
</div>

</template>


<style scoped>

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#header {
  animation: fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

#header {
  margin-top: 40px;
  background: var(--gradient-font);
  font-family: var(--font-head);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 116px;
  text-align: center;
}
</style>

