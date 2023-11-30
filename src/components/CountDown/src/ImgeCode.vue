<template>
  <Button v-bind="$attrs" class="w-25 p-0" :loading="loading">
    <img @click="handleStart" class="w-full h-full object-cover" :src="codeUrl" alt="" srcset="" />
  </Button>
  <div class="size mt1 cursor-pointer pb-0.5" @click="handleStart">看不清换一个?</div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Button } from 'ant-design-vue';
  import { getAppEnvConfig } from '@/utils/env';

  const { VITE_GLOB_API_URL } = getAppEnvConfig();

  defineOptions({ name: 'ImgeCode' });

  const props = withDefaults(
    defineProps<{
      count?: number;
      codeApi: string;
    }>(),
    {
      count: 10,
      codeApi: undefined,
    },
  );

  const loading = ref(false);
  const codeUrl = ref(VITE_GLOB_API_URL + props.codeApi);
  const handleStart = () => (codeUrl.value = codeUrl.value + '?' + Math.random());
</script>

<style lang="scss" scoped>
  $color: rgb(114 163 224);

  .size {
    border-bottom: 1px solid #e3ede3;
    font-size: 9px;

    &:hover {
      border-color: $color;
      color: $color;
    }
  }
</style>
