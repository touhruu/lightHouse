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
import DialogAddBoard from "../components/dialog-add-board.vue";
</script>

<style lang="scss" scoped>
.board {
  &__header {
    font-size: 32px;
    color: #0b8fb8;
    font-weight: bold;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
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
