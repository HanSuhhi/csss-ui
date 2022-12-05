<template>
  <CLayout class="left-right">
    main
    <template #aside>aside</template>
  </CLayout>
</template>

<style>
.left-right {
  height: 10rem;
}

.left-right > aside {
  background-color: seagreen;
}

.left-right > main {
  background-color: goldenrod;
}
</style>
