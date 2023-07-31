<template>
  <img src="https://i.pinimg.com/1200x/41/a8/1a/41a81a743b0139fc682ba46b4bd354ef.jpg" ref="userAvatar">
  <div class="list" v-if="isOpen" ref="list">
    <div class="list__item" v-for="item in items">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref, toRefs } from 'vue';
import { IMenuUser } from '../store/types'

const isOpen:Ref<boolean> = ref(false)
const userAvatar:Ref = ref()
const list:Ref = ref()

const props = defineProps({
  items: Array<IMenuUser>
})

const { items } = toRefs(props);

onMounted(() => {
  userAvatar.value.addEventListener("click", function () {
    if(!isOpen.value)
    setTimeout(() => isOpen.value = true, 0);
  });

  document.addEventListener("click", function () {
    isOpen.value = false;
  });
});

</script>

<style scoped lang="scss">
img{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: relative;
}
.list {
    width: 150px;
    background-color: white;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    border-radius: 8px;
    top: 80px;
    right: 40px;

    &__item{
      width: 100%;
      height: 50px;
      padding: 10px 20px 10px 20px;
      font-size: 18px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      transition: .5s;
      user-select: none;
    }

    &__item:hover{
      background-color: #0b8fb863;
      color: white;
      transition: .5s;
    }
}
</style>
