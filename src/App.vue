<script setup lang="ts">
// import { computed } from "vue";
// import { useStore } from "vuex";
import menuBurger from "./components/menu-burger.vue";
import MenuHeader from "./components/menu-header.vue";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
// const store = useStore();

// const data = computed(() => store.state.test.data);
// store.commit('test/setData', 'не кусь')
</script>

<template>
  <!-- <div> {{ data }} </div> -->
  <div class="conteiner">
    <menu-burger></menu-burger>
    <div class="flex-column-wrapper">
      <menu-header></menu-header>
      <router-view></router-view>
    </div>
    
  </div>
  
  
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');

  *{
    margin: 0px;
    padding: 0px;
    font-family: 'Kalam', cursive;
  }

  p{
    font-family: 'Kalam', cursive;
  }

  a{
    text-decoration: none;
  }

  .conteiner{
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .flex-column-wrapper{
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 40px 0 40px;
  }

  .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
    box-shadow: 0 0 0 0.2rem #0b8fb863;
  }

  .p-colorpicker-panel {
    background: none;
    border: none;
  }

  .p-colorpicker-panel .p-colorpicker-color-selector {
    top: 0 !important;
    left: 0 !important;
  }

  .p-colorpicker-panel .p-colorpicker-hue {
    top: 0 !important;
  }
</style>
