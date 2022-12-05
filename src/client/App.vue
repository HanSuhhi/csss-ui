<script setup lang="ts">
import { ref, watchEffect } from "vue";

const a = ref<CLayoutApi>();
watchEffect(() => {
  a.value?.setHeaderHeightSize();
  a.value?.setAsideWidthSize("small");
  a.value?.setValue({
    "--header-height": 10,
  });
  a.value?.setLayoutType("header-aside");
});
</script>

<template>
  <CLayout ref="a">
    <template #header>header</template>
    <!-- <template #aside>aside</template> -->
    <template #default>main </template>
    <template #footer>footer</template>
  </CLayout>
</template>
