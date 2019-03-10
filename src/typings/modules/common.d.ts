declare interface IListItem<T = any> {
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
  list: T[];
}
