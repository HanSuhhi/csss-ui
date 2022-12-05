<script lang="ts" setup>
import { ref, onMounted } from "vue";

const Layout = ref<CLayoutApi>();

onMounted(() => Layout.value?.setLayoutType("header-footer"));
</script>

<template>
  <CLayout ref="Layout" class="header-aside">
    main
    <template #header>header</template>
    <template #aside>aside</template>
    <template #footer>footer</template>
  </CLayout>
</template>

<style>
.header-aside {
  height: 10rem;
}

.header-aside > main {
  background-color: goldenrod;
}

.header-aside > header {
  background-color: seagreen;
}

.header-aside > aside {
  background-color: sandybrown;
}

.header-aside > footer {
  background-color: brown;
}
</style>
