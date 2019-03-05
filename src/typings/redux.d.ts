declare interface RootState {
  locale: LocaleEntity;
  user: UserEntity;
}
declare interface RootAction<T = {}> {
  type: string;
  payload: T;
}
declare interface RootState {
  locale: LocaleEntity;
  user: UserEntity;
  articles: IArticleItem[];
}
