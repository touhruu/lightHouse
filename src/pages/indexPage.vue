<template>
  <div class="board__header">
    <p>Boards</p>
  </div>
  <div class="board__wrapper">
    <DialogAddBoard />
    <div class="board__item">
      <p class="board__name">Your name for board</p>
    </div>
    <div class="board__item">
      <p class="board__name">Your name for board</p>
    </div>
    <div class="board__item">
      <p class="board__name">Your name for board</p>
    </div>
    <div class="board__item">
      <p class="board__name">Your name for board</p>
    </div>
    <div class="board__item">
      <p class="board__name">Your name for board</p>
    </div>
    <div class="board__item">
      <p class="board__name">Your name for board</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from 'vuex';
import DialogAddBoard from "../components/dialog-add-board.vue";

const store = useStore();

store.dispatch('board/getBoards');

const board = computed(() => store.state.boards)

console.log(board)

</script>

<style lang="scss" scoped>
.board {
  &__header {
    font-size: 32px;
    color: #0b8fb8;
    font-weight: bold;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    justify-items: stretch
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #0b8fb863;
    border-radius: 8px;
  }

  &__name {
    color: white;
    font-weight: bold;
  }
}
</style>
