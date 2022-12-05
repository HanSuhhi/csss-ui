<template>
  <CLayout class="up-down-2">
    main
    <template #footer>footer</template>
  </CLayout>
</template>

<style>
.up-down-2 {
  height: 10rem;
}

.up-down-2 > main {
  background-color: goldenrod;
}

.up-down-2 > footer {
  background-color: seagreen;
}
</style>
