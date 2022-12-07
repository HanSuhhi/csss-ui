<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Layout } = useCsssLayout({
  setLayoutType: ["aside"],
});
</script>

<template>
  <CLayout ref="Layout" class="aside-layout">
    main
    <template #header>header</template>
    <template #aside>aside</template>
    <template #footer>footer</template>
  </CLayout>
</template>

<style>
.aside-layout {
  height: 10rem;
}

.aside-layout > main {
  background-color: goldenrod;
}

.aside-layout > header {
  background-color: seagreen;
}

.aside-layout > aside {
  background-color: sandybrown;
}

.aside-layout > footer {
  background-color: brown;
}
</style>
