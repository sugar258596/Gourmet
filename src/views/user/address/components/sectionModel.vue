<template>
  <commentModel class="comment-list" :comment-list="arrList" @handleClick="handleClick" />

  <comment class="comment">
    <template #author>
      <a>自己的名字 >>>回复>>> {{ passivityName }}</a>
    </template>
    <template #avatar>
      <Avatar
        src="https://www.bing.com/th?id=OIP._YFRagbOM8FbGUSUJy-m6QAAAA&w=153&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <form-item>
        <Textarea ref="textarea" v-model:value="replieForm.content" :rows="4" />
      </form-item>
      <form-item :wrapper-col="{ offset: 22 }">
        <Button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          回复
        </Button>
      </form-item>
    </template>
  </comment>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import { Comment, Avatar, Button, FormItem, Textarea, message } from 'ant-design-vue';
  import commentModel from './commentModel.vue';
  import { getComment } from '/@/api/demo/comment';
  import { AddParams, GetParams } from '/@/api/demo/model/replyModel';
  import { addReply } from '/@/api/demo/reply';

  const submitting = ref<boolean>(false);

  const arrList = ref<any[]>([]);
  const textarea = ref();
  // 被回复的名字
  const passivityName = ref<string>('');

  const form = reactive<GetParams>({
    id: 1,
    page: 0,
    pageSize: 10,
  });

  const replieForm = reactive<AddParams>({
    id: 0,
    content: '测试回复接口',
    type: 0,
  });

  const getData = async () => {
    const { List } = await getComment(form);
    console.log(List);
    arrList.value = List;
  };

  onMounted(() => {
    getData();
  });

  // 点击回复
  const handleClick = (id: number, name: string, isSubComment: boolean) => {
    passivityName.value = name;
    replieForm.id = id;
    replieForm.type = isSubComment ? 1 : 0;
    textarea.value.focus();
  };

  const handleSubmit = () => {
    replieForm.content = replieForm.content.trim();
    if (!replieForm.content) {
      return message.warn('不能回复空内容');
    } else {
      addReply(replieForm).then((res) => {
        getData();
        replieForm.content = '';
        console.log(res);
      });
    }
  };
</script>
<style lang="scss" scoped>
  .comment-list {
    max-height: 300px;
    overflow-y: scroll;
  }

  .comment {
    // 固定在底部
    position: absolute;
    width: 95%;
    // bottom: 0%;
    background: #fff;
  }
</style>
