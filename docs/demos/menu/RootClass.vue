<script setup lang="ts">
import { useCsssMenu } from "csss-ui/csss-ui.es.js";

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
          {
            title: "vagetable",
            children: [
              {
                sub: "potato 🥔",
              },
              {
                sub: "carrot 🥕",
              },
              {
                sub: "green pepper🫑",
              },
            ],
          },
        ],
      },
    ],
  },
  style: {
    classList: {
      menu: ["", "background"],
    },
  },
});
</script>

<template>
  <c-menu ref="Menu" class="a">
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

<style scoped>
.background {
  color: rgb(255 255 255 / 30%);
}
</style>
