<template>
<div class="board__header">
    <p>Boards</p>
</div>
<div class="board__wrapper">
    <div class="board__item">
        <p class="board__name">Add board</p>
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
    <div class="board__item">
        <p class="board__name">Your name for board</p>
    </div>
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.board{
    &__header{
        font-size: 32px;
        color: #0b8fb8;
        font-weight: bold;
    }

    &__wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    &__item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 80px;
        background-color: #0b8fb863;
        color: white;
        font-weight: bold;
        border-radius: 8px;
    }
}
</style>