import { ListParams } from '/@/api/demo/model/commentModel';

export interface CommetnPorps {
  commentList: ListParams[];
  // 是否为子评论
  isSubComment?: boolean;
}
