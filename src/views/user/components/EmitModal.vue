<template>
  <div>
    <Modal v-model:open="open" title="修改信息" @ok="handleOk" @cancel="cancel" v-if="false">
      <Form
        :model="formState"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <Input v-model:value="formState.username" />
        </form-item>

        <form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <input-password v-model:value="formState.password" />
        </form-item>
      </Form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';

  import { Modal, Form, FormItem, Input, InputPassword } from 'ant-design-vue';

  const open = ref<boolean>(true);
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const cancel = (e: MouseEvent) => {
    console.log(e, ';cancel');
  };

  const handleOk = (e: MouseEvent) => {
    console.log(e, ';ok');
  };
</script>
<style lang="scss" scoped></style>
