<template>
  <c-tabs>
    <template #list>
      <span v-for="index in 3" :key="index"> tab {{ index }} </span>
      <span data-disabled>tab 4</span>
    </template>
  </c-tabs>
</template>
