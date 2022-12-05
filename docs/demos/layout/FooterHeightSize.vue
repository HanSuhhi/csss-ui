<script lang="ts" setup>
import { ref, onMounted } from "vue";

const Large = ref<CLayoutApi>();
const Normal = ref<CLayoutApi>();
const Small = ref<CLayoutApi>();

onMounted(() => {
  Large.value?.setFooterHeightSize("large");
  Normal.value?.setFooterHeightSize("normal");
  Small.value?.setFooterHeightSize("small");
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
