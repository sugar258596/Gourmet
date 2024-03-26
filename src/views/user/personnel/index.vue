<template>
  <BasicTable @register="registerTable">
    <template #form-formHeader>
      <FormModal
        @register="register"
        :title="'添加用户'"
        :schemas="getModalUser()"
        @handle-submit="handleSubmit"
        :loading="loading"
      />
      <EmitModal />
    </template>
    <template #form-advanceBefore>
      <a-button :icon="h(UserAddOutlined)" @click="openModal3">添加用户</a-button>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'avatar'">
        <CropperAvatar
          :uploadApi="uploadApi as any"
          :value="record.avatar"
          :width="60"
          :showBtn="false"
          :src="record.avatar"
          @change="handleUploadSuccess"
        />
      </template>
      <template v-else-if="column.key === 'newDate'"> {{ TimeLoading(record.newDate) }} </template>
      <template v-else-if="column.key === 'upDate'"> {{ TimeLoading(record.upDate) }} </template>
      <template v-else-if="column.key === 'operation'">
        <a-button :icon="h(EditOutlined)" color="warning" class="ml-2" @click="handEdit(record)"
          >修改</a-button
        >
        <Popconfirm title="确定执行此操作吗?" @confirm="confirm(record.id)">
          <a-button :icon="h(DeleteOutlined)" color="error" class="ml-2">删除</a-button>
        </Popconfirm>
      </template>
    </template>
  </BasicTable>
</template>

<script setup lang="ts">
  import { h, ref } from 'vue';

  import { Popconfirm } from 'ant-design-vue';
  import { UserAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';

  import { BasicTable, useTable } from '/@/components/Table';
  import { CropperAvatar } from '/@/components/Cropper/index';
  import { useModal } from '/@/components/Modal';

  import { uploadApi } from '@/api/sys/upload';
  import { TimeLoading } from '@/utils/is';
  import { AppendApi, SearchApi, DeleteApi } from '@/api/demo/user';

  import { FormModal, EmitModal } from '../index';
  import { getUserColumns, getFormConfig, getModalUser } from '../table';

  const loading = ref(false);

  const [registerTable, { reload }] = useTable({
    api: SearchApi,
    title: '用户列表',
    showIndexColumn: true,
    pagination: {
      hideOnSinglePage: false,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    },
    fetchSetting: {
      listField: 'List',
      totalField: 'length',
    },
    rowKey: 'id',
    columns: getUserColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
  });

  const [register, { openModal, closeModal }] = useModal();

  const openModal3 = () => {
    openModal(true, {
      name: '',
      password: '',
      secpassword: '',
      Email: '',
    });
  };

  const handleSubmit = async (obj) => {
    obj.username = obj.name;
    await AppendApi(obj)
      .then(() => {
        loading.value = true;
        closeModal();
        reload();
      })
      .catch((err) => {
        throw err;
      });
  };

  const handEdit = (e) => {
    console.log(e);
  };

  const handleUploadSuccess = () => {};

  const confirm = async (id: number) => {
    DeleteApi(id)
      .then(() => {
        reload();
      })
      .catch((err) => {
        throw err;
      });
  };
</script>
<style lang="scss" scoped></style>
/@/api/demo/user
