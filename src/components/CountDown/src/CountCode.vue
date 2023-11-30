<template>
  <a-input v-bind="$attrs" :class="prefixCls" :size="size" :value="state">
    <template #addonAfter>
      <ImgeCode :codeApi="sendCodeApi" />
    </template>
  </a-input>
</template>
<script lang="ts" setup>
  import ImgeCode from './ImgeCode.vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useRuleFormItem } from '@/hooks/component/useFormItem';

  defineOptions({ name: 'CountCode', inheritAttrs: false });

  const props = defineProps({
    value: { type: String },
    size: { type: String, validator: (v: string) => ['default', 'large', 'small'].includes(v) },
    count: { type: Number, default: 60 },
    sendCodeApi: {
      type: String,
      default: null,
    },
  });
  console.log('handleCode', props.sendCodeApi);

  const { prefixCls } = useDesign('countdown-input');
  const [state] = useRuleFormItem(props);
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-countdown-input';

  .@{prefix-cls} {
    .ant-input-group-addon {
      padding-right: 0;
      border: none;
      background-color: transparent;

      button {
        font-size: 14px;
      }
    }
  }
</style>
