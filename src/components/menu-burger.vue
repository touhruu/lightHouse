<template>
  <div class="menu" :class="{ activ: stateCollabse }">
    <div class="collabse" @click="collabs()">
      <img class="collabse__icon" src="src/assets/icons/white_collabs.png">
    </div>
    <router-link to="/">
      <div class="menu__logo">
        <img class="menu__logo-picture" src="src/assets/icons/lightHouse1.png">
        <p class="menu__logo-name">LightHouse</p>
      </div>
    </router-link>
    <div class="menu__item">
      <img class="menu__item-picture" src="src/assets/icons/board1.png">
      <p class="menu__item-name">Board</p>
    </div>
    <div class="menu__item">
      <img class="menu__item-picture" src="src/assets/icons/dashboard1.png">
      <p class="menu__item-name">Dashboard</p>
    </div>
    <div class="menu__item">
      <img class="menu__item-picture" src="src/assets/icons/settings3.png">
      <p class="menu__item-name">Settings</p>
    </div>
    <div class="menu__item">
      <img class="menu__item-picture" src="src/assets/icons/exit1.png">
      <p class="menu__item-name">Exit</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {Ref, ref} from "vue"
  const stateCollabse:Ref<boolean> = ref(false);
  
  console.log(stateCollabse.value)
  const collabs = () => {
    stateCollabse.value = !stateCollabse.value;
    console.log(stateCollabse.value)
  }
</script>

<style scoped lang="scss">
.menu{
  width: 300px;
  min-width: 300px;
  height: 100vh;
  box-shadow: 12px 0 15px -4px rgba(34, 60, 80, 0.2);
  padding: 30px 0px 0px 0px;
  box-sizing: border-box;
  position: relative;
  transition: 1.5s;

  &__logo{
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    padding-left: 30px;
    box-sizing: border-box;
  }

  &__logo-picture{
    transform: scale(.81, .81);
    transition: 1.5s;
    object-fit: contain;
  }

  &__logo-name{
    width: 100%;
    padding-left: 15px;
    font-size: 26px;
    font-weight: bold;
    color: #0b8fb8;
    transition: 3s;
    opacity: 1;
  }

  &__item{
    width: 100%;
    display: flex;
    padding: 6px 0px 6px 40px;
    box-sizing: border-box;
  }

  &__item-picture{
    width: 30px;
    height: 35px;
    object-fit: contain;
  }

  &__item-name{
    width: 100%;
    font-size: 22px;
    padding-left: 15px;
    transition: 3s;
    opacity: 1;
  }

}

.router-link-active>.menu__item{
  background-color: #e7e7e7;
}

.activ{
  min-width: 80px;
  width: 80px;
  padding-left: 0px;
  transition: 1.2s;
}
.activ>.menu__item{
  padding: 6px 0px 6px 0px;
  transition: 1s;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.activ>.router-link-active>.menu__logo{
  padding: 0px 0px 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: 1s;
  height: 104px;
}

.activ>.router-link-active>.menu__logo>.menu__logo-name{
  height: 0px;
  opacity: 0;
  padding: 0;
  transition: 0s;
}

.activ>.router-link-active>.menu__logo>.menu__logo-picture{
  transform: scale(0.65, 0.65);
  transition: 1s;
}

.activ>.menu__item>.menu__item-name{
  height: 0px;
  opacity: 0;
  padding: 0;
  transition: 0s;
}

.activ>.collabse{
  transform: rotate(0.5turn);
  transition: 1s;
}
.collabse{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0b8fb8;
  position: absolute;
  right: -15px;
  top: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;

  &__icon{
    width: 25px;
    object-fit: contain;
  }
}
</style>