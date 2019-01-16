declare interface IMeta {
  views: number;
  likes: number;
  comments: number;
}

declare interface IArticleGetParams {
  classify: string;
  cPage?: number;
  sPage?: number;
  keyword?: string;
  state?: string | number;
  publish?: string | number;
  tag?: string[];
  date?: string;
  hot?: boolean;
}

declare interface IArticleItem {
  id: number;
  _id: string;
  meta: IMeta;
  tag: string[];
  state: number;
  publish: number;
  title: string;
  keyword: string;
  descript: string;
  thumb: string;
  type: number;
  create_at: string;
  update_at: string;
  __v: number;
}
