import { BaseModel } from '@/model/BaseModel'

export interface SmsLogModel extends BaseModel{
    text?: string
    phone: string


}