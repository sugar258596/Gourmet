<template>
  <div> 12312</div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { getUserFoodPost } from '@/api/demo/publish';

  onMounted(async () => {
    const data = await getUserFoodPost();
    console.log(data);
  });
</script>
<style lang="scss" scoped></style>
