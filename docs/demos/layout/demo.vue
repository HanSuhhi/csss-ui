<script setup lang="ts">
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Layout } = useCsssLayout({
  setAsideWidthSize: ["small"],
  setStyleValue: [{ "--header-height": 4 }],
  setLayoutType: ["header-aside"],
});
</script>

<template>
  <CLayout ref="Layout" class="layout-demo">
    <template #header>header</template>
    <template #aside>aside</template>
    <template #default>main </template>
    <template #footer>footer</template>
  </CLayout>
</template>

<style>
.layout-demo {
  height: 10rem;
}

.layout-demo > main {
  background-color: goldenrod;
}

.layout-demo > header {
  background-color: seagreen;
}

.layout-demo > aside {
  background-color: sandybrown;
}

.layout-demo > footer {
  background-color: brown;
}
</style>
