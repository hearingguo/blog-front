declare interface RootAction<T = {}> {
  type: string;
  payload: T;
}
declare interface RootState {
  locale: LocaleEntity;
  articles: IListItem<IArticleItem>;
  classifies: IListItem<IClassifyItem>;
  links: IListItem<ILinkItem>;
}
