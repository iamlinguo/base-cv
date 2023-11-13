import { BaseModel } from '@/model/BaseModel'
import { StatusConstant } from '@/constant/sys'

export interface WebsiteConfigureModel extends BaseModel{
    name?: string,
    icon?: string,
    logo?: string,
    leftLogo?: string,
    rightLogo?: string,
    headTitle?: string,
    footTitle?: string,
    status?: string,
    domainTitle?: string,
    code?: string,
    billingStartTime?: string
    billingEndTime?: string
    remarks?: string
}


export class WebsiteConfigureModel implements WebsiteConfigureModel {
    name?: string
    icon?: string
    logo?: string
    leftLogo?: string
    rightLogo?: string
    headTitle?: string
    footTitle?: string
    status?: string = '0'
    code?: string
}


export const getStatusName = (key: string = '') => {
    return StatusConstant.find( item => item.key === key) ? StatusConstant.find( item => item.key === key).value : '---'
}