import { BaseModel } from '@/model/BaseModel'

export interface SassDomainModel extends BaseModel {
    name?: string
    used?: Number
    secondDomain?: string
}

export class SassDomain implements SassDomainModel {
    name?: string | undefined
    used?: Number | 0
    secondDomain?: string | undefined
    id?: number | undefined
    createDate?: string | undefined
    updateDate?: string | undefined
}
