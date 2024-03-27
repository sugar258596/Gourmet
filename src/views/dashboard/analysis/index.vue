<template>
  <div class="grid grid-cols-3 gap-5 grid-container">
    <Card
      v-for="v in state.list"
      class="flex justify-center flex-items-center grid-item bg-red"
      :key="v.id"
    >
      <div class="flex w-full h-50 gap-3">
        <Avatar :avatar="v.user.avatar" :name="v.user.username" />
        <content :title="v.title" :imageList="v.imageList"></content>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import { Card } from 'ant-design-vue';
  import { Avatar, Content } from './components/index';

  import { getFoodPost } from '@/api/demo/publish';
  import { ListTpye } from '/@/api/demo/model/publishModel';

  const state = reactive<{
    list: ListTpye[];
  }>({
    list: [],
  });

  onMounted(() => {
    init();
  });

  const init = async () => {
    const { List } = await getFoodPost();
    state.list = List;
  };
</script>

<style lang="scss" scoped>
  .border {
    border: 1px solid #6f6e6e;
  }
</style>
