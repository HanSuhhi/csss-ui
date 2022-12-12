<template>
  <c-tabs>
    <template #list>
      <span v-for="index in 2" :key="index"> tab {{ index }} </span>
      <p>tab 3</p>
      <b>tab 4</b>
    </template>
  </c-tabs>
</template>

<style scoped>
span {
  color: var(--red);
}

span {
  font-size: 1rem;
}

p {
  color: var(--gray);
}

b {
  color: var(--yellow-deep-2);
}
</style>
