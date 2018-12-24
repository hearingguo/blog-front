declare interface AjaxResponse<T = any> {
  /**
   * 状态码
   * @type { string }
   */
  status: number;

  /**
   * 消息
   * @type {string}
   */
  msg: string;

  /**
   * DATA
   * @type {*}
   */
  data?: T;
}
