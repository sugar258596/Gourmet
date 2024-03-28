<template>
  <div>
    <template v-for="v in commentList" :key="v.id">
      <comment>
        <template #actions>
          <span
            key="comment-nested-reply-to"
            @click="handleClick(v.id, v.user.username, isSubComment)"
            >回复</span
          >
        </template>
        <template #author>
          <a>{{ v.user.username }}</a>
        </template>
        <template #avatar>
          <avatar :src="v.user.avatar" alt="名字" />
        </template>
        <template #content>
          <p> {{ v.content }} </p>
        </template>
        <template #datetime>
          <Tooltip :title="dayjs(`${v.updatedAt}`).format('YYYY-MM-DD HH:mm:ss')">
            <span>{{ dayjs(`${v.updatedAt}`).locale('zh-cn').fromNow() }}</span>
          </Tooltip>
        </template>
        <commentModel
          v-if="v.replies"
          :comment-list="v.replies"
          :isSubComment="true"
          @handle-click="handleClick"
        />
      </comment>
    </template>
  </div>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import { Comment, Avatar, Tooltip } from 'ant-design-vue';

  import { CommetnPorps } from './porps';

  dayjs.extend(relativeTime);

  withDefaults(defineProps<CommetnPorps>(), {
    isSubComment: false,
  });

  const emits = defineEmits<{
    handleClick: [id: number, name: string, isSubComment: boolean];
  }>();

  // 点击回复
  const handleClick = (id: number, name: string, isSubComment: boolean) => {
    emits('handleClick', id, name, isSubComment);
  };
</script>
<style lang="scss" scoped></style>
