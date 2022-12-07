<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Large } = useCsssLayout({
  setAsideWidthSize: ["large"],
});
const { COMP: Normal } = useCsssLayout({
  setAsideWidthSize: ["normal"],
});
const { COMP: Small } = useCsssLayout({
  setAsideWidthSize: ["small"],
});
</script>

<template>
  <CLayout ref="Large" class="left-right">
    main
    <template #aside>large</template>
  </CLayout>
  <hr />
  <CLayout ref="Normal" class="left-right">
    main
    <template #aside>normal</template>
  </CLayout>
  <hr />
  <CLayout ref="Small" class="left-right">
    main
    <template #aside>small</template>
  </CLayout>
</template>

<style>
.left-right {
  height: 10rem;
}

.left-right > aside {
  background-color: seagreen;
}

.left-right > main {
  background-color: goldenrod;
}
</style>
