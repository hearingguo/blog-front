declare interface IClassifyGetParams {
  keyword?: string;
  cPage?: number;
  sPage?: number;
}

declare interface IClassifyItem {
  title: string;
  name: string;
  description: string;
  count: number;
}
