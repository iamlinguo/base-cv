import { BaseModel } from '@/model/BaseModel'
import { LoginWayConstant } from "@/constant/sys";

export interface LoginLogModel extends BaseModel{
    phone: string
    email?: string
    loginWay: string
    source?: string
    ip?: string
}

export const getWayName = (key: string = '') => {
    return LoginWayConstant.find( item => item.key === key) ? LoginWayConstant.find( item => item.key === key).value : '---'
}