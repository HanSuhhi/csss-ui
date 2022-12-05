<script lang="ts" setup>
import { ref, onMounted } from "vue";

const Large = ref<CLayoutApi>();
const Normal = ref<CLayoutApi>();
const Small = ref<CLayoutApi>();

onMounted(() => {
  Large.value?.setHeaderHeightSize("large");
  Normal.value?.setHeaderHeightSize("normal");
  Small.value?.setHeaderHeightSize("small");
});
</script>

<template>
  <CLayout ref="Large" class="up-down">
    main
    <template #header>large</template>
  </CLayout>
  <hr>
  <CLayout ref="Normal" class="up-down">
    main
    <template #header>normal</template>
  </CLayout>
  <hr>
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
