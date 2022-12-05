<script lang="ts" setup>
import { ref, onMounted } from "vue";

const Layout = ref<CLayoutApi>();

onMounted(() => Layout.value?.setLayoutType("footer-aside"));
</script>

<template>
  <CLayout ref="Layout" class="footer-aside">
    main
    <template #header>header</template>
    <template #aside>aside</template>
    <template #footer>footer</template>
  </CLayout>
</template>

<style>
.footer-aside {
  height: 10rem;
}

.footer-aside > main {
  background-color: goldenrod;
}

.footer-aside > header {
  background-color: seagreen;
}

.footer-aside > aside {
  background-color: sandybrown;
}

.footer-aside > footer {
  background-color: brown;
}
</style>
