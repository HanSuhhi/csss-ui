<script lang="ts" setup>
import { ref, onMounted } from "vue";

const Large = ref<CLayoutApi>();
const Normal = ref<CLayoutApi>();
const Small = ref<CLayoutApi>();

onMounted(() => {
  Large.value?.setAsideWidthSize("large");
  Normal.value?.setAsideWidthSize("normal");
  Small.value?.setAsideWidthSize("small");
});
</script>

<template>
  <CLayout ref="Large" class="left-right">
    main
    <template #aside>large</template>
  </CLayout>
  <hr>
  <CLayout ref="Normal" class="left-right">
    main
    <template #aside>normal</template>
  </CLayout>
  <hr>
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
