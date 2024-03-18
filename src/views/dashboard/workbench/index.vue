<template>
  <PageWrapper title="美食分享" contentFullHeight>
    <BasicForm
      autoFocusFirstItem
      :labelWidth="200"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      @submit="handleSubmit"
      :submitButtonOptions="{ text: '提交', type: 'primary' }"
    />
    <review class="px-10" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicForm, FormSchema } from '@/components/Form';
  import { useMessage } from '@/hooks/web/useMessage';
  import { PageWrapper } from '@/components/Page';
  import review from './review.vue';

  import { uploadApi } from '@/api/sys/upload';

  const formData = reactive({
    title: '1312',
    desc: '13',
    rete: 2.5,
    imageList: [],
  });

  const schemas: FormSchema[] = [
    // 标题
    {
      field: 'title',
      component: 'Input',
      label: '标题',
      defaultValue: formData.title,
      colProps: {
        span: 8,
      },
      required: true,
      rules: [
        {
          required: true,
          message: '请输入标题',
        },
      ],
      componentProps: {
        onChange: (e: any) => {
          console.log(e.target.value);
        },
      },
    },
    // 描述
    {
      field: 'desc',
      component: 'InputTextArea',
      label: '描述',
      defaultValue: formData.desc,
      colProps: {
        span: 24,
      },
      required: true,
      rules: [
        {
          required: true,
          message: '请输入描述',
        },
      ],
    },
    // 评分
    {
      field: 'rete',
      component: 'Rate',
      label: '评分',
      defaultValue: formData.rete,
      colProps: {
        span: 24,
      },
      componentProps: {
        disabled: false,
        allowHalf: true,
      },
      required: true,
      rules: [
        {
          required: true,
          message: '请选择评分',
        },
      ],
    },
    // 图片上传
    {
      field: 'imageList',
      component: 'ImageUpload',
      label: '上传图片',
      required: true,
      defaultValue: formData.imageList, // 默认值
      componentProps: {
        api: uploadApi, // 上传地址
        accept: ['png', 'jpeg', 'jpg'], // 接受的文件类型
        maxSize: 2, // 文件大小限制
        maxNumber: 1, // 文件数量限制
        emptyHidePreview: false, // 无图片时隐藏预览
        onChange: (fileList: any) => {
          console.log('fileList', fileList);
        },
        onDelete: (file: any) => {
          console.log('onDelete', file);
        },
      },
    },
  ];

  const { createMessage } = useMessage();

  function handleSubmit(values: any) {
    console.log('values', values);
    createMessage.success('click search,values:' + JSON.stringify(values));
  }
</script>
