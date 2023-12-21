import { ref, h } from 'vue';
import { BasicColumn, FormProps, FormSchema } from '/@/components/Table';
import { validateEmailOrPhone } from '/@/utils/is';

export const getUserColumns = (): BasicColumn[] => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: '昵称',
      dataIndex: 'username',
    },
    {
      title: '手机号/邮箱',
      dataIndex: 'Email',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      helpMessage: h('span', '点击头像进行头像更换'),
    },
    {
      title: '注册时间',
      dataIndex: 'newDate',
      sorter: (a, b) => a.newDate.localeCompare(b.newDate),
    },
    {
      title: '更新时间',
      dataIndex: 'upDate',
      sorter: (a, b) => a.upDate.localeCompare(b.upDate),
    },
    {
      title: '操作',
      dataIndex: 'operation',
    },
  ];
};

export const getFormConfig = (): Partial<FormProps> => {
  return {
    schemas: [
      {
        field: 'username',
        component: 'Input',
        label: '查找信息',
        colProps: {
          xl: 8,
          xxl: 3,
        },
        componentProps: {
          placeholder: '用户昵称',
        },
      },
    ],
    // showActionButtonGroup: false,
  };
};

export const getModalUser = (): FormSchema[] => {
  const password = ref();
  return [
    {
      field: 'name',
      component: 'Input',
      label: '昵称',
      colProps: {
        span: 24,
      },
      rules: [{ required: true }],
    },
    {
      field: 'password',
      component: 'InputPassword',
      label: '密码',
      colProps: {
        span: 24,
      },
      rules: [
        {
          required: true,
          validator(rule, value) {
            password.value = value;
            if (value.length < 6) {
              return Promise.reject('密码不能为少于六位');
            }
            return Promise.resolve();
          },
        },
      ],
    },
    {
      field: 'secpassword',
      component: 'InputPassword',
      label: '二次密码',
      colProps: {
        span: 24,
      },
      rules: [
        {
          required: true,
          validator(rule, value) {
            if (value.length < 6) {
              return Promise.reject('密码不能为少于六位');
            }
            if (password.value !== value) {
              return Promise.reject('两次密码不一致');
            }
            return Promise.resolve();
          },
        },
      ],
    },
    {
      field: 'Email',
      component: 'Input',
      label: '手机号码/邮箱',
      colProps: {
        span: 24,
      },
      rules: [
        {
          required: true,
          validator(rule, value) {
            if (!validateEmailOrPhone(value)) return Promise.reject('请输入有效的邮箱或手机号');
            return Promise.resolve();
          },
        },
      ],
    },
  ];
};
