import { BaseModel } from '@/model/BaseModel'
import { VisibilityConstant } from '@/constant/sys'

export interface BlogModel extends BaseModel{
    title: string,
    content: string,
    sort: number
    visibility: string
    secondDomain: string
    poster: string
    introduction: string
    visits: number
}

export const getVisibilityName = (key: string = '') => {
    return VisibilityConstant.find( item => item.key === key) ? VisibilityConstant.find( item => item.key === key).value : '---'
}