<template>
  <div>
    <comment>
      <template #actions>
        <span key="comment-nested-reply-to">回复</span>
      </template>
      <template #author>
        <a>名字1</a>
      </template>
      <template #avatar>
        <avatar
          src="https://www.bing.com/th?id=OIP._YFRagbOM8FbGUSUJy-m6QAAAA&w=153&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="名字"
        />
      </template>
      <template #content>
        <p> 这个是第一层的评论 </p>
      </template>
      <template #datetime>
        <Tooltip :title="dayjs('2024-02-21T07:22:11.888Z').format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ dayjs('2024-02-21T07:22:11.888Z').locale('zh-cn').fromNow() }}</span>
        </Tooltip>
      </template>
      <!--  -->
      <comment>
        <template #actions>
          <span>回复</span>
        </template>
        <template #author>
          <a>名字2</a>
        </template>
        <template #avatar>
          <Avatar
            src="https://www.bing.com/th?id=OIP._YFRagbOM8FbGUSUJy-m6QAAAA&w=153&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="名字"
          />
        </template>
        <template #content>
          <p> 这个是第二层的评论 </p>
        </template>
        <comment>
          <template #actions>
            <span>回复</span>
          </template>
          <template #author>
            <a>名字3</a>
          </template>
          <template #avatar>
            <Avatar
              src="https://www.bing.com/th?id=OIP._YFRagbOM8FbGUSUJy-m6QAAAA&w=153&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="名字"
            />
          </template>
          <template #content>
            <p> 这个是第三层的评论 </p>
          </template>
        </comment>
      </comment>
    </comment>

    <comment>
      <template #author>
        <a>自己的名字</a>
      </template>
      <template #avatar>
        <Avatar
          src="https://www.bing.com/th?id=OIP._YFRagbOM8FbGUSUJy-m6QAAAA&w=153&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="Han Solo"
        />
      </template>
      <template #content>
        <form-item>
          <Textarea v-model:value="value" :rows="4" />
        </form-item>
        <form-item :wrapper-col="{ offset: 22 }">
          <Button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            回复
          </Button>
        </form-item>
      </template>
    </comment>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import { Comment, Avatar, Tooltip, Button, FormItem, Textarea } from 'ant-design-vue';

  dayjs.extend(relativeTime);

  const value = ref<string>('');
  const submitting = ref<boolean>(false);

  const handleSubmit = () => {
    if (!value.value) {
      return;
    }
  };
</script>
<style lang="scss" scoped></style>
