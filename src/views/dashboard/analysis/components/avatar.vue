<template>
  <div class="text-center py-2">
    <div class="basic">
      <avatar :size="64">
        <template #icon><UserOutlined /></template>
      </avatar>
      <h5 class="my-1">ID</h5>
    </div>
    <div class="follow my-2 cursor-pointer">
      <badge count="关注" />
    </div>
    <div class="Rate">
      <Rate :value="2" disabled class="Rate" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Avatar, Rate, Badge } from 'ant-design-vue';
  import { UserOutlined } from '@ant-design/icons-vue';
</script>
<style lang="scss" scoped>
  .Rate {
    font-size: 10px;

    :deep(.ant-rate-star:not(:last-child)) {
      margin-inline-end: 2px;
    }
  }
</style>
