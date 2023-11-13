/**
 * 响应体对象

 */
export interface RootObject<T>{
  code: number
  msg: string
  data: T
}
