<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";
import AAside from "./components/AAside.vue";
import { useCsssTabs } from "@/index";
import { useCsssInput } from "../packages/input/composables/csssInput";
import { watchEffect, onMounted, ref } from "vue";

const { COMP: Layout } = useCsssLayout({
  style: {
    headerHeightSize: "large",
    asideWidthSize: "large",
    layoutType: "header-aside",
  },
});

const { COMP } = useCsssTabs({
  style: {
    classList: {},
  },
});

const { COMP: Input, state } = useCsssInput({
  state: {
    model: "asd",
    active: true,
  },
  style: {
    property: {},
  },
});

const asd = ref();

watchEffect(() => {
  asd.value = state.value?.model;
  console.log("asd.value : ", asd.value);
});
</script>

<template>
  <CLayout ref="Layout">
    <c-input ref="Input">
      <template #footer="{ active }">{{ active }}</template>
    </c-input>

    <!-- <c-tabs ref="COMP">
      <template #list>
        <span v-if="true">1</span>
        <span v-show="true">1</span>
        <span v-for="index in 2" :key="index"> tab {{ index }} </span>
        <b>tab 3</b>
      </template>
    </c-tabs> -->
    <!-- <template #header> header </template>
    <template #aside>
      <a-aside />
    </template> -->
  </CLayout>
</template>

<style scoped>
.tab {
  margin: 0 4px;
}
</style>
