declare interface IClassifyGetParams {
  keyword?: string;
  cPage?: number;
  sPage?: number;
}

declare interface IClassifyItem {
  _id: string;
  title: string;
  name: string;
  description: string;
  count: number;
}
