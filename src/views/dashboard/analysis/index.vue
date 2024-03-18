<template>
  <div class="grid grid-cols-3 gap-5 grid-container">
    <Card v-for="i in 9" class="flex justify-center flex-items-center grid-item bg-red" :key="i">
      <div class="flex w-full h-50 gap-3">
        <Avatar />
        <content></content>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
  import { Card } from 'ant-design-vue';
  import { Avatar, Content } from './components/index';
</script>

<style lang="scss" scoped>
  .border {
    border: 1px solid #6f6e6e;
  }
</style>
