/**
 * 用户对象

 */
export interface UserInfoModel {
    id?: number
    username?: string
    password?: string
    name?: string
    email?: string
    phone?: string
    roles?: string[]
    admin?: boolean
    invalidTime?: string
    disable?: boolean
    post?: string
    enterpriseId?: number
    duty?: string
    approve?: boolean
    activation?: number
    enterpriseName?: string
    enterpriseLimit?: number
    defunct?: number
    clientId?: number
    role?: string
}

export class UserInfo implements UserInfoModel {
    id?: number | undefined
    username: string | undefined
    password: string | undefined
    name?: string | undefined
    email?: string | undefined
    phone?: string | undefined
    roles?: string[] | undefined
    admin?: boolean | undefined
    invalidTime?: string | undefined
    disable?: boolean | undefined
    post?: string | undefined
    enterpriseId?: number | undefined
    duty?: string | undefined
    approve?: boolean | undefined
    activation?: number | undefined
    enterpriseName?: string | undefined
    enterpriseLimit?: number | undefined
    addEnterpriseLimit!: number | 0
    price?: number | undefined
    defunct?: number | undefined
    clientId?: number | undefined
    fromSource?: number[] | undefined
    fromStatus?: string | undefined

}
export interface LoginModel {
    username: string
    password: string
    code: string
    token: string
}
