import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/personnel',
  meta: {
    orderNo: 11,
    icon: 'ant-design:user-outlined',
    title: t('routes.demo.user.userManagement'),
  },
  children: [
    {
      path: 'personnel',
      name: 'Personnel',
      component: () => import('@/views/user/personnel/index.vue'),
      meta: {
        title: t('routes.demo.user.personnel'),
      },
    },
    {
      path: 'address',
      name: 'Address',
      component: () => import('@/views/user/address/index.vue'),
      meta: {
        title: t('routes.demo.user.address'),
      },
    },
  ],
};
export default user;
