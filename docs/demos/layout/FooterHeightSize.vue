<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Large } = useCsssLayout({
  setFooterHeightSize: ["large"],
});
const { COMP: Normal } = useCsssLayout({
  setFooterHeightSize: ["normal"],
});
const { COMP: Small } = useCsssLayout({
  setFooterHeightSize: ["small"],
});
</script>

<template>
  <CLayout ref="Large" class="up-down">
    main
    <template #footer>large</template>
  </CLayout>
  <hr>
  <CLayout ref="Normal" class="up-down">
    main
    <template #footer>normal</template>
  </CLayout>
  <hr>
  <CLayout ref="Small" class="up-down">
    main
    <template #footer>small</template>
  </CLayout>
</template>

<style>
.up-down {
  height: 10rem;
}

.up-down > main {
  background-color: goldenrod;
}

.up-down > footer {
  background-color: seagreen;
}
</style>
