<template>
<div class="menu">
  <CustomList :items="menuElement"/>  
</div>

</template>

<script setup lang="ts">
import CustomList from "./custom-list.vue";

const menuElement = [
  {
    id: 1,
    name: 'Settings'
  },
  {
    id: 1,
    name: 'Settings'
  },
  {
    id: 1,
    name: 'Settings'
  },
  {
    id: 1,
    name: 'Settings'
  },
]
</script>

<style scoped>
  .menu{
    width: 100%;
    display: flex;
    justify-content: end;
  }
</style>
