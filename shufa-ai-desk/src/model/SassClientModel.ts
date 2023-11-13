import { BaseModel } from '@/model/BaseModel'
import { StatusConstant } from '@/constant/sys'
import { UserInfoModel } from './UserModel'

export interface SassClientModel extends BaseModel {
    name?: string
    clientId?: number
    secondDomain?: string
    dbUrl?: string
    dbPort?: string
    dbName?: string
    dbUsername?: string
    dbPassword?: string
    rdbUrl?: string
    rdbPort?: string
    rdbIndex?: string
    rdbPassword?: string
    sourceClientId?: number
    sourceClientname?: string
    isTemplate?: string
}

export class SassClient implements SassClientModel {
    name?: string | undefined
    clientId?: number | undefined
    secondDomain?: string | undefined
    dbUrl?: string | undefined
    dbPort?: string | undefined
    dbName?: string | undefined
    dbUsername?: string | undefined
    dbPassword?: string | undefined
    rdbUrl?: string | undefined
    rdbPort?: string | undefined
    rdbIndex?: string | undefined
    rdbPassword?: string | undefined
    id?: number | undefined
    balance?: number | undefined
    unitPrice!: number | 0
    createDate?: string | undefined
    updateDate?: string | undefined
    sourceClientId?: number | undefined
    sourceClientname?: string | undefined
    versionDesc?: string | undefined
    isTemplate?: string = '0'
}
export class SassClientUserTree {
    children: Array<UserInfoModel> | undefined
    value?: string | undefined
    label?: string | undefined
}
export const getIsTemplateName = (key: string = '') => {
    return StatusConstant.find(item => item.key === key) ? StatusConstant.find(item => item.key === key).value : '---'
}