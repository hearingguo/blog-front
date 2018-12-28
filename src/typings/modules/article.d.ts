declare interface IMeta {
  views: number;
  likes: number;
  comments: number;
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
