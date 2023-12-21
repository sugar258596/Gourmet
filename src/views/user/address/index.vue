<template>
  <BasicTable @register="registerTable">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'avatar'">
        <Avatar :size="60" :src="record.avatar" />
      </template>
      <template v-else-if="column.key === 'newDate'">
        {{ TimeLoading(record.newDate) }}
      </template>
      <template v-else-if="column.key === 'upDate'"> {{ TimeLoading(record.upDate) }} </template>
    </template>
  </BasicTable>
</template>

<script setup lang="ts">
  import { Avatar } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';

  import { SearchApi } from '@/api/manage/user';
  import { TimeLoading } from '@/utils/is';

  import { getUserColumns, getFormConfig } from '../table';

  const [registerTable] = useTable({
    api: SearchApi,
    title: '用户地址列表',
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
</script>
<style lang="scss" scoped></style>
