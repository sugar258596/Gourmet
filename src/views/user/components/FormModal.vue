<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="title"
    @open-change="handleVisibleChange"
    @ok="handleSubmit"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="modelRef" />
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, nextTick, defineOptions } from 'vue';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '@/components/Form';

  defineOptions<{ name: 'FormModel'; inheritAttrs: false }>;

  const props = defineProps<{
    userData?: Object;
    title: string;
    schemas: FormSchema[];
    loading: boolean;
  }>();

  const emits = defineEmits<{
    handleSubmit: [e: object];
    register;
  }>();

  const modelRef = ref({});
  const [registerForm, { validateFields }] = useForm({
    labelWidth: 110,
    schemas: props.schemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 12,
    },
  });

  const [register, { setModalProps }] = useModalInner((data) => {
    data && onDataReceive(data);
  });

  function onDataReceive(data) {
    let obj = {};
    Object.keys(data).forEach((e) => {
      obj[e] = data[e];
    });
    modelRef.value = obj;
  }

  function handleVisibleChange(v) {
    v && props.userData && nextTick(() => onDataReceive(props.userData));
  }

  const handleSubmit = async () => {
    try {
      const res = await validateFields();
      setModalProps({ loading: props.loading, confirmLoading: props.loading });
      emits('handleSubmit', res);
    } catch (err) {
      setModalProps({ loading: false, confirmLoading: false });
      throw err;
    }
  };
</script>
