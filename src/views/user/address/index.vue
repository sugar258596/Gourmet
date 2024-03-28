<template>
  <Card class="m-2 p-3 b">
    <div class="flex gap-10 border-b-beige">
      <div class="flex flex-col items-center mt-5">
        <avatar
          :size="120"
          src="https://www.bing.com/th?id=OIP._YFRagbOM8FbGUSUJy-m6QAAAA&w=153&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        />
        <span> 名字</span>
      </div>
      <div>
        <p class="card-title !mb-1">标题</p>
        <p class="indent-8">
          属性为零个或多个 值，它们之间用逗号分隔，最后必填一个关键字值。每个
          指向一个图像文件。浏览器将尝试加载指定的第一个图像，如果无法加载则返回下一个图像，如果无法加载图像或未指定图像，则使用关键字值代表的指针类型。
          每个 后面都可选跟一对空格分隔的数字 表示偏移。它们用来设置指针的热点
          (即自定义图标的实际点击位置) ,位置相对于图标的左上角</p
        >
        <MultipeUpload :image-list="fileList" :max-count="fileList.length" :disabled="disabled" />
        <p class="float-right mr-3">2024-05-08</p>
      </div>
    </div>
    <SectionModel />
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Card, Avatar } from 'ant-design-vue';
  import MultipeUpload from '@/views/dashboard/workbench/components/multipeUpload.vue';
  import SectionModel from './components/sectionModel.vue';

  const fileList = ref([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const disabled = true;
</script>
<style lang="scss" scoped>
  .card-title {
    font-size: 1.5rem;
  }

  .float-right {
    font-size: 0.6rem;
  }

  .border-b-beige {
    border-bottom: 1px solid #f0f0f0;
  }
</style>
