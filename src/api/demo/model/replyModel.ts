export interface AddParams {
  id: number;
  content: string;
  type: number; // 1: 回复评论 2: 回复回复
}

export interface GetParams {
  id: number;
  page?: number;
  pageSize?: number;
}
