/**

 */
export interface BaseModel {
   id?: number,
   createDate?: string,
   updateDate?: string
}

/**
 * 响应体对象

 */
export interface RootObject<T>{
   code: number
   msg: string
   data: T
}

/**
 * 响应体对象

 */
export class QueryParams{

   page?: number = 1
   limit?: number = 10

}

/**
 * 响应体对象

 */
export class PageData<T>{
   total?: number = 0
   list?: Array<T> = []

}
