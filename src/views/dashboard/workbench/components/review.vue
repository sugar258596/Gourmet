<template>
  <div>
    <List
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
      item-layout="horizontal"
    >
      <template #renderItem="{ item }">
        <list-item>
          <comment :author="item.author" :avatar="item.avatar" :content="item.content">
            <template #datetime>
              <tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                <span>{{ item.datetime }}</span>
              </tooltip>
            </template>
          </comment>
        </list-item>
      </template>
    </List>
    <comment>
      <template #avatar>
        <avatar :size="64">
          <template #icon><UserOutlined /></template>
        </avatar>
      </template>
      <template #content>
        <form-item>
          <Textarea v-model:value="value" :rows="4" />
        </form-item>
        <form-item>
          <Button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            Add Comment
          </Button>
        </form-item>
      </template>
    </comment>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    Comment,
    List,
    ListItem,
    FormItem,
    Avatar,
    Textarea,
    Button,
    Tooltip,
  } from 'ant-design-vue';
  import { UserOutlined } from '@ant-design/icons-vue';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';

  dayjs.extend(relativeTime);

  type CommentData = Record<string, string>;

  const comments = ref<CommentData[]>([]);

  const submitting = ref<boolean>(false);
  const value = ref<string>('');
  const handleSubmit = () => {
    if (!value.value) {
      return;
    }

    submitting.value = true;

    setTimeout(() => {
      submitting.value = false;
      comments.value = [
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: value.value,
          datetime: dayjs().locale('zh-cn').fromNow(),
        },
        ...comments.value,
      ];
      value.value = '';
    }, 1000);
  };
</script>
