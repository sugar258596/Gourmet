<template>
  <div class="p-5">
    <Form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <form-item label="标题" name="title">
        <Input v-model:value="formState.title" />
      </form-item>

      <form-item label="描述" name="description">
        <Textarea v-model:value="formState.description" />
      </form-item>
      <form-item label="上传" name="files">
        <multipeUpload v-model:image-list="formState.files" />
      </form-item>
      <form-item :wrapper-col="{ span: 14, offset: 12 }">
        <Button style="margin-right: 10px" @click="resetForm">重置</Button>
        <Button type="primary" @click="onSubmit">发布</Button>
      </form-item>
    </Form>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Form, FormItem, Button, Textarea, Input } from 'ant-design-vue';
  import type { Rule } from 'ant-design-vue/es/form';

  import multipeUpload from './components/multipeUpload.vue';
  import { addFoodPost } from '/@/api/demo/publish';

  const formRef = ref();
  const labelCol = { span: 5 };
  const wrapperCol = { span: 10 };
  const formState = reactive({
    title: '标题',
    description: '描述',
    files: [],
  });
  const rules: Record<string, Rule[]> = {
    title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
    files: [{ required: true, message: '文件不能为空', trigger: 'change' }],
  };
  const onSubmit = () => {
    formRef.value
      .validate()
      .then(() => {
        const formData = new FormData();
        formData.append('title', formState.title);
        formData.append('description', formState.description);
        formState.files.forEach((file: any) => {
          formData.append('files', file.originFileObj);
        });
        addFoodPost(formData as any).then(() => {
          resetForm();
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const resetForm = () => formRef.value.resetFields();
</script>
