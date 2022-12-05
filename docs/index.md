---
navbar: false
sidebar: false
editLink: false
---

<script setup>
import { inBrowser, useRouter, withBase } from 'vitepress'
import { onMounted } from 'vue'

onMounted(() => {
  if (inBrowser) window.location.replace(withBase('/en-US/'))
  else useRouter().go(withBase('/en-US/'))
})

</script>
