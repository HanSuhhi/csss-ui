<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    (<CLayoutApi>this.$refs.Layout).setAsideWidthSize("small");
  },
});
</script>

<template>
  <CLayout ref="Layout">
    main
    <template #aside>aside</template>
  </CLayout>
</template>
