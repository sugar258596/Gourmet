export interface AvatarProps {
  avatar: string; // 图片地址
  name: string; // 名称
  rate: number; // 评分
  follow: boolean; // 是否关注
}

export interface CardListProps {
  title: string; // 标题
  imageList: string[]; // 图片地址列表
}
