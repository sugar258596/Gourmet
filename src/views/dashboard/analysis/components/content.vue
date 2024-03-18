<template>
  <div class="content">
    <div class="title my-3"> 标题</div>
    <div class="grid grid-cols-3 gap-2">
      <div v-for="i in 3" :Key="i" class="bg-purple flex-1 image-box relative">
        <img
          class="object-cover w-full h-full"
          src="https://th.bing.com/th?id=OIP.a13xv-Dkd4pE26B1PNFpyAHaGl&w=265&h=235&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt=""
        />
        <div
          v-if="i == 3"
          class="absolute justify-center flex-items-center h-full bottom-0 left-0 right-0 color-slate-100 Prompting"
          >2+</div
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
  .content {
    display: grid;
    grid-template-rows: 2fr 3fr;
    width: inherit;
  }

  .title {
    font-size: 20px;
    text-indent: 1em;
  }

  .image-box {
    max-width: 93px;
    height: auto;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(0 0 0 / 25%); /* 半透明黑色遮罩 */
    }

    &:hover::after {
      background: rgb(0 0 0 / 50%); /* 半透明黑色遮罩 */
    }

    &:last-child:hover::after {
      background: rgb(0 0 0 / 25%); /* 最后一个子元素不显示遮罩 */
    }

    &:last-child:hover .Prompting {
      display: flex;
    }

    .Prompting {
      display: none;
      background: rgb(0 0 0 / 50%);
      font-size: 40px;
    }
  }
</style>
