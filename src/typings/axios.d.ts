declare namespace Ajax {
  // 请求接口数据
  export interface Response<T = any> {
    /**
     * success
     * @type { boolean }
     */
    success: boolean;

    /**
     * 状态码
     * @type { number }
     */
    code: number;

    /**
     * 消息
     * @type { string }
     */
    message: string;

    /**
     * DATA
     * @type {*}
     */
    data?: T;
  }
}
