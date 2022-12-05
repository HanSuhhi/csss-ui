<template>
  <CLayout class="header-footer">
    main
    <template #header>header</template>
    <template #aside>aside</template>
    <template #footer>footer</template>
  </CLayout>
</template>

<style>
.header-footer {
  height: 10rem;
}

.header-footer > main {
  background-color: goldenrod;
}

.header-footer > header {
  background-color: seagreen;
}

.header-footer > aside {
  background-color: sandybrown;
}

.header-footer > footer {
  background-color: brown;
}
</style>
