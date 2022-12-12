<template>
  <c-tabs>
    <template #list>
      <span v-for="index in 3" :key="index"> tab {{ index }} </span>
    </template>
    <template #panel-0> this is panel-0 </template>
    <template #panel-1> this is panel-1 </template>
    <template #panel-2> this is panel-2 </template>
  </c-tabs>
</template>
