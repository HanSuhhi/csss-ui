<template>
  <c-tabs>
    <template #list>
      <span v-for="index in 2" :key="index"> tab {{ index }} </span>
      <b>tab 3</b>
    </template>
  </c-tabs>
</template>

<style scoped>
span {
  color: var(--red);
}

span:nth-child(2) {
  color: var(--purple);
}

b {
  color: var(--yellow-deep-2);
}
</style>
