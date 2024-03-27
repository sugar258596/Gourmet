interface imgae {
  url: string;
  [propName: string]: any;
}

export interface multipleProps {
  imageList: imgae[];
  title?: string;
  maxCount?: number;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
}
