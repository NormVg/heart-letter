
<script setup>
const props  = defineProps({
  header:{
    default:"Headering",

  }
})
</script>

<template>

<div id="header">
{{ props.header }}
</div>

</template>


<style scoped>
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

