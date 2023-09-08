<template>
<div class="menu">
  <CustomList :items="menuElement" v-if="user.auth"/>
  <button class="menu__login" @click="visible = true" v-if="!user.auth">Sign In</button>
  <Dialog v-model:visible="visible" modal header="Login" :style="{ width: '22vw' }">
    <div class="dialog">
      <input v-model="authInfoUser.email" type="text" class="dialog__input" placeholder="Enter your email">
      <input v-model="authInfoUser.password" type="password" class="dialog__input" placeholder="Enter your password">
      <p class="dialog__text-for-link">Don't have an account? 
        <a @click="isOpen()" class="dialog__link">Sign Up</a>
      </p>
      <button @click="auth()" class="dialog__button">Continue</button>
    </div>
  </Dialog>
  <Dialog v-model:visible="open" modal header="Registration" :style="{ width: '22vw' }">
    <div class="dialog">
      <input type="text" class="dialog__input" placeholder="Enter your name">
      <input type="text" v-model="regInfoUser.email" class="dialog__input" placeholder="Enter your email">
      <input type="password" v-model="regInfoUser.password" class="dialog__input" placeholder="Enter your password">
      <p class="dialog__text-for-link">
        Have an account? 
        <a class="dialog__link" @click="visible = true, open = false">Sign In</a>
      </p>
      <button @click="reg()" class="dialog__button">Continue</button>
    </div>
  </Dialog>
</div>

</template>

<script setup lang="ts">
import { Ref, computed, ref } from "vue";
import CustomList from "./custom-list.vue";
import { useStore } from "vuex";
import { IAuth } from "../store/types"
import { IReg } from "../store/types"

const store = useStore();
const user = computed(() => store.state.auth);

const visible: Ref<boolean> = ref(false);
const open: Ref<boolean> = ref(false);

const menuElement = [
  {
    id: 1,
    name: 'Profile'
  },
  {
    id: 2,
    name: 'Settings'
  },
  {
    id: 3,
    name: 'Exit'
  }
]

const isOpen = () => {
  open.value = true
  visible.value = false
}

const authInfoUser: Ref<IAuth> = ref({
  email: '',
  password: ''
})

const regInfoUser: Ref<IReg> = ref({
  email: '',
  password: ''
})

const auth = () => {
  // console.log(authInfoUser.value)
  store.dispatch('auth/authUser', authInfoUser.value)
  visible.value = false
  authInfoUser.value.email = ''
  authInfoUser.value.password = ''
}

const reg = () => {
  console.log(regInfoUser.value)
  store.dispatch('auth/registration', regInfoUser.value)
  // open.value = false
  // regInfoUser.value.email = ''
  // regInfoUser.value.password = ''
}
</script>

<style scoped lang="scss">
.menu{
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  &__login{
    width: 100px;
    height: 40px;
    padding: 0.2rem 0.2rem;
    border: 2px dashed #0b8fb8;
    color: #0b8fb8;
    border-radius: 8px;
    text-decoration-line: none;
    font-size: 20px;
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    transition: .4s;
  }

  &__login:hover{
    background-color: rgba(11, 143, 184, 0.3882352941);;
    color: white;
    transition: .4s;
    border: 2px dashed white;
  }
}

.dialog{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__input{
    width: 100%;
    padding: 0.5rem 0.5rem;
    border: 1px solid #ced4da;
    color: #495057;
    border-radius: 8px;
    text-decoration-line: none;
  }

  &__button{
    width: 100%;
    padding: 0.2rem 0.2rem;
    border: 2px dashed #0b8fb8;
    color: #0b8fb8;
    border-radius: 8px;
    text-decoration-line: none;
    font-size: 16px;
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    transition: 0.4s;
  }

  &__button:hover{
    background-color: rgba(11, 143, 184, 0.3882352941);;
    color: white;
    transition: .4s;
    border: 2px dashed white;
  }

  &__text-for-link{
    font-size: 12px;
  }

  &__link{
    color: #0b8fb8;
    text-decoration: underline;
    cursor: pointer;
  }

}
</style>
