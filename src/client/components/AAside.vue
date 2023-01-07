<script setup lang="ts">
import { useCsssButton, useCsssTabs } from "@/index";
import { useCsssMenu } from "../../packages/menu/composables/csssMenu";

const { COMP: Tabs } = useCsssTabs({
  state: {
    active: 1,
  },
  style: {
    classList: {
      tabs: ["", "row"],
      list: ["", "column"],
      listItem: ["list-item"],
    },
    property: {},
  },
});

const { COMP: Button } = useCsssButton({
  style: {
    classList: {},
    property: {
      "--font-size": "2rem",
    },
  },
});

const { COMP: Menu } = useCsssMenu({
  state: {
    menuList: [
      {
        name: "hello",
        children: [
          {
            name: "item1",
            children: [
              {
                need: "cool",
              },
            ],
          },
          {
            name: "item2",
          },
        ],
      },
      {
        name: "bye",
      },
    ],
  },
});
</script>

<template>
  <CTabs ref="Tabs">
    <template #list>
      <c-button ref="Button" color="green" class="list-item">1</c-button>
    </template>
    <template #panel-0>
      <c-menu ref="Menu" class="a">
        <template #item-0="{ toggle }">
          <div class="asd" @click="toggle">😀 click me !</div>
        </template>
        <template #item-1="{ name, isOpen, toggle }">
          <span>:</span>
          <span @click="toggle">{{ name }}{{ isOpen }}</span>
        </template>
        <template #item-2="{ need }">
          <span>: {{ need }}</span>
        </template>
      </c-menu>
    </template>
  </CTabs>
</template>

<style scoped>
.row {
  flex-direction: row;
  height: 100%;
}

.row :deep(.column) {
  flex-flow: column wrap;
  height: 100%;
  border-right: 1px solid red;
}

.asd {
  width: 100px;
}
</style>
