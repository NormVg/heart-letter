<script setup lang="ts">
import { renderMarkdown } from '~/utils/renderMarkdown'
import "~/assets/github-markdown-dark.css"

const props = defineProps({
  md:{
    type:String,
    default:"# Code asdasd as \n asdasd \n\n asd asdasda \n asd asdasd \n a sd asdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sdasdasd \n\n asd asdasda \n asd asdasd \n a sd"
  }
})


// const rawMarkdown = ref(`# Hello World\nThis is **Markdown** with \`code\` block.`)
const html = computed(() => renderMarkdown(props.md))
</script>

<template>
    <span class="markdown-content">

      <div class="prose max-w-none" v-html="html" />
  </span>
</template>



<style>

.markdown-content {
  font-weight: 400;
  font-style: normal;
  background: none !important;
  color: black;
  user-select: text;
}

.markdown-content h1{
  font-family: var(--font-head);
}


.markdown-content h2{
  font-family: var(--font-head);
}


.markdown-content h3{
  font-family: var(--font-head);
  color:var(--red)
}

</style>
