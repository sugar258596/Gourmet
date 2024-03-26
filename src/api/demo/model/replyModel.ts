export interface AddReply {
  id: number;
  content: string;
  type: number; // 1: 回复评论 2: 回复回复
}

export interface GetReply {
  id: number;
  page?: number;
  pageSize?: number;
}
