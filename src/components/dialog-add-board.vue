<template>
  <div class="board__item" label="Show" @click="visible = true">
    <p class="board__name">Add board +</p>
  </div>
  <Dialog v-model:visible="visible" modal header="Add board" :style="{ width: '40vw' }">
    <div class="editor__wrapper">
      <div class="editor__wrapper-input">
        <input 
        class="editor__input" 
        type="text" 
        placeholder="Enter title board" 
        v-model="board.title" />
        <p class="editor__wrapper-input-text">- Enter board name</p>
      </div>
      <div
        class="editor__example"
        :style="{ backgroundImage: `${board.color}`, backgroundColor: `#${board.color}` }"
        :class="{
          editor__color: board.color.length == 6,
          'editor__animation-backgraund': board.animation,
        }"
      >
        <div class="editor__example-board">
          <div class="editor__example-board-wrapper-name">
            <p class="editor__example-column-name">To do</p>
            <img src="src/assets/icons/add.png"> 
            <img src="src/assets/icons/menu.png"> 
          </div>
          <div class="editor__example-card"></div>
          <div class="editor__example-card"></div>
          <div class="editor__example-card"></div>
        </div>
        <div class="editor__example-board">
          <div class="editor__example-board-wrapper-name">
            <p class="editor__example-column-name">In progress</p>
            <img src="src/assets/icons/add.png"> 
            <img src="src/assets/icons/menu.png"> 
          </div>
          <div class="editor__example-card"></div>
          <div class="editor__example-card"></div>
        </div>
        <div class="editor__example-board">
          <div class="editor__example-board-wrapper-name">
            <p class="editor__example-column-name">Done</p>
            <img src="src/assets/icons/add.png"> 
            <img src="src/assets/icons/menu.png"> 
          </div>
          <div class="editor__example-card"></div>
        </div>
      </div>
      <div class="editor__wrapper-checkbox">
        <Checkbox v-model="board.animation" :binary="true" />
        <p class="editor__checkbox__text">Stop animation</p>
      </div>
      <div class="editor__gradients-wrapper-wrapper">
        <div class="editor__gardients-wrapper">
          <template v-for="gradient in gradients" :key="gradient.id">
            <button
              class="editor__button-gradient"
              :style="{ backgroundImage: `${gradient.color}` }"
              @click="getColor(gradient.color)"
            ></button>
          </template>
        </div>
        <ColorPicker v-model="board.color" inline />
      </div>
      <button class="editor__button" @click="addBoard()">Create</button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { IGradient } from "../store/types";
import { IBoard } from "../store/types";

const visible: Ref<boolean> = ref(false);

const board:Ref<IBoard> = ref({
  title: '',
  color: 'linear-gradient(-45deg, rgb(238, 174, 202) 0%, rgb(148, 187, 233) 100%)',
  animation: false
})

const gradients: Array<IGradient> = [
  {
    id: 1,
    color: "linear-gradient(-45deg, rgb(238, 174, 202) 0%, rgb(148, 187, 233) 100%)",
  },
  {
    id: 2,
    color: "linear-gradient(-45deg, #f6d365 0%, #fda085 51%, #f6d365 100%)",
  },
  {
    id: 3,
    color: "linear-gradient(-45deg, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)",
  },
  {
    id: 4,
    color: "linear-gradient(-45deg, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)",
  },
  {
    id: 5,
    color: "linear-gradient(-45deg, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%)",
  },
  {
    id: 6,
    color: "linear-gradient(-45deg, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%)",
  },
  {
    id: 7,
    color: "linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5)",
  },
  {
    id: 8,
    color: "ffffff",
  },
];

const getColor = (colorGradient: string) => {
  board.value.color = colorGradient;
};

const addBoard = () => {
  console.log(board.value)
}
</script>

<style scoped lang="scss">
.board {
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    background-color: #7070702e;
    border-radius: 8px;
  }

  &__name {
    color: #0b8fb8;
    font-weight: bold;
  }
}

.editor {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__wrapper-checkbox {
    width: 100%;
    display: flex;
    padding: 10px 0 10px 0;
  }

  &__wrapper-input {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 10px 0;
  }

  &__checkbox__text {
    padding-left: 5px;
  }

  &__wrapper-input-text {
    padding-left: 10px;
  }

  &__input {
    max-width: 180px;
    padding: 0.5rem 0.5rem;
    border: 1px solid #ced4da;
    color: #495057;
    border-radius: 8px;
    text-decoration-line: none;
  }

  &__example {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    width: 100%;
    height: 250px;
    border-radius: 8px;
    margin-bottom: 10px;
    background: linear-gradient(90deg, rgb(238, 174, 202) 0%, rgb(148, 187, 233) 100%);
    background-size: 600%;
    -webkit-animation: anime 16s linear infinite;
    animation: anime 5s linear infinite;
    animation-play-state: running;
    border: 1px solid #ced4da;
  }

  &__gradients-wrapper-wrapper {
    display: flex;
    gap: 10px;
  }

  &__gardients-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__button-gradient {
    width: 80px;
    height: 40px;
    border: 0;
    border-radius: 8px;
    background-size: 600%;
    -webkit-animation: anime 16s linear infinite;
    animation: anime 3s linear infinite;
  }

  &__button-gradient:focus {
    border: 2px solid rgb(67, 11, 11);
  }

  &__button-gradient:hover {
    background-position: right center;
  }

  &__color {
    background-image: none !important;
  }

  &__animation-backgraund {
    animation-play-state: paused;
    background-size: auto;
  }

  &__example-board{
    width: 100px;
    height: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #eef2f5;
    padding: 5px 10px 10px 10px;
    gap: 10px;
  }

  &__example-column-name{
    width: 100%;
    font-size: 8px;
    font-weight: bold;
  }

  &__example-card{
    width: 100%;
    height: 50px;
    background-color: white;
    border-radius: 5px;
  }

  &__example-board-wrapper-name{
    display: flex;
    width: 100%;
    align-items: center;
    user-select: none;

    img{
      width: 10px;
      height: 10px;
    }
  }

  &__button{
    width: 100px;
    padding: 0.2rem 0.2rem;
    border: 1px solid #ced4da;
    color: #495057;
    border-radius: 8px;
    text-decoration-line: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: #0b8fb863;
  }
}

@keyframes anime {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
