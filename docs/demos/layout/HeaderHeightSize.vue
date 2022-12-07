<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Large } = useCsssLayout({
  setHeaderHeightSize: ["large"],
});
const { COMP: Normal } = useCsssLayout({
  setHeaderHeightSize: ["normal"],
});
const { COMP: Small } = useCsssLayout({
  setHeaderHeightSize: ["small"],
});
</script>

<template>
  <CLayout ref="Large" class="up-down">
    main
    <template #header>large</template>
  </CLayout>
  <hr />
  <CLayout ref="Normal" class="up-down">
    main
    <template #header>normal</template>
  </CLayout>
  <hr />
  <CLayout ref="Small" class="up-down">
    main
    <template #header>small</template>
  </CLayout>
</template>

<style>
.up-down {
  height: 10rem;
}

.up-down > header {
  background-color: seagreen;
}

.up-down > main {
  background-color: goldenrod;
}
</style>
