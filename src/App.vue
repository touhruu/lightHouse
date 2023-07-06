<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import menuBurger from "./components/menu-burger.vue";
const store = useStore();

// const data = computed(() => store.state.test.data);
// store.commit('test/setData', 'не кусь')
</script>

<template>
  <!-- <div> {{ data }} </div> -->
  <div class="conteiner">
    <menu-burger></menu-burger>
    <router-view></router-view>
  </div>
  
  
</template>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }

  .conteiner{
    display: flex;
    flex-direction: row;
  }
</style>
