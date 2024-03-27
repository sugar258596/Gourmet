<template>
  <div class="clearfix">
    <Upload
      list-type="picture-card"
      v-model:file-list="fileList"
      :before-upload="beforeUpload"
      @remove="handleRemove"
      @preview="handlePreview"
      :accept="accept"
      :max-count="maxCount"
      :multiple="multiple"
    >
      <div v-if="fileList!.length < maxCount">
        <plus-outlined />
        <div style="margin-top: 8px">{{ title }}</div>
      </div>
    </Upload>
    <Modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </Modal>
  </div>
</template>
<script lang="ts" setup>
  import { ref, watch, onMounted } from 'vue';
  import { Modal, Upload, message } from 'ant-design-vue';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import type { UploadProps } from 'ant-design-vue';

  import { multipleProps } from './porps';

  defineOptions({ name: 'MultipeUpload' });

  const props = withDefaults(defineProps<multipleProps>(), {
    title: '上传',
    maxCount: 6,
    maxSize: 2 * 1024 * 1024,
    multiple: true,
    accept: 'image/png, image/jpeg, image/jpg, image/gif, image/svg+xml,video/*',
  });

  const emit = defineEmits(['update:imageList']);

  const previewVisible = ref(false);
  const previewImage = ref('');
  const previewTitle = ref('');

  const fileList = ref<UploadProps['fileList']>([]);

  const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
  };
  // @ts-ignore
  const handlePreview = async (file: UploadProps['fileList'][number]) => {
    if (!file.url && !file.preview) {
      file.preview = (await getBase64(file.originFileObj)) as string;
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
  };

  const beforeUpload: UploadProps['beforeUpload'] = (file) => {
    if (file.size > props.maxSize) {
      message.warn(`图片大小不能超过 ${props.maxSize / 1024 / 1024}MB!`);
    } else {
      fileList.value = [...(fileList.value || []), file];
    }
    return false;
  };

  const handleRemove: UploadProps['onRemove'] = (file) => {
    const index = fileList.value!.indexOf(file);
    const newFileList = fileList.value!.slice();
    newFileList.splice(index, 1);
    fileList.value = newFileList;
  };

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  onMounted(() => {
    fileList.value = (props.imageList as UploadProps['fileList']) || [];
  });
  watch(
    () => fileList.value,
    (val) => {
      emit('update:imageList', val);
    },
  );
</script>
<style lang="scss" scoped>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    color: #999;
    font-size: 32px;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
