<script setup lang="ts">
import { useCsssButton, useCsssTabs } from "@/index";
import { setUncaughtExceptionCaptureCallback } from "process";
import { useCsssMenu } from "../../packages/menu/composables/csssMenu";
import { watchEffect } from "vue";
import { loadConfigFromFile } from "vite";

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
        name: "plant",
        children: [
          {
            title: "fruit",
            children: [
              {
                sub: "apple 🍎",
              },
              {
                sub: "orange 🍊",
              },
              {
                sub: "banana 🍌",
              },
            ],
          },
        ],
      },
    ],
    active: [0, 1],
  },
  style: {
    classList: {
      items: {
        0: ["details"],
        1: ["details"],
        2: ["details"],
      },
    },
  },
});
</script>

<template>
  <CTabs ref="Tabs">
    <template #list>
      <c-button ref="Button" color="green" class="list-item">1</c-button>
    </template>
    <template #panel-0>
      <c-menu ref="Menu">
        <template #item-0="{ toggle, name }">
          <div @click="toggle">
            {{ name }}
          </div>
        </template>
        <template #item-1="{ title, toggle }">
          <div @click="toggle">{{ title }}</div>
        </template>
        <template #item-2="{ sub }">
          <span>{{ sub }}</span>
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

.csss-menu :deep(.details[data-active]) {
  background-color: var(--yellow);
}
</style>
