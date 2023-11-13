import { ApplyConstant } from '@/constant/sys'
import { BaseModel } from '@/model/BaseModel'

export interface UserApplyModel extends BaseModel{
    name: string
    phone: string
    code?: string
    enterpriseName: string
    enterpriseAddress: string
    email: string
    status?: string
    remarks: string


}

export const getStartsName = (key: string = '') => {
    return ApplyConstant.find( item => item.key === key) ? ApplyConstant.find( item => item.key === key).value : '---'
}