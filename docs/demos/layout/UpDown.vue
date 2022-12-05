<template>
  <CLayout class="up-down">
    main
    <template #header>header</template>
  </CLayout>
</template>

<style>
.up-down {
  height: 10rem;
}

.up-down > header {
  background-color: seagreen;
}

.up-down > main {
  background-color: goldenrod;
}
</style>
