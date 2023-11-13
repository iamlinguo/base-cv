import { RequestParams } from './http'
import https from './http/https'
import { Method, ContentType } from './http'
import { UserApplyModel } from '@/model/UserApply'
import { PageData } from '@/model/BaseModel'


export const check = (params: RequestParams) => {
    return https().request<boolean>('/v1.0/check', Method.POST, params, ContentType.multipart)
}

export const search = (params: RequestParams) => {
    return https().request<boolean>('/v1.0/search', Method.POST, params, ContentType.multipart)
}

