import { BaseModel } from '@/model/BaseModel'

export interface CalculatorLogModel extends BaseModel{
    enterpriseName: string,
    username: string,
    text?: string
    phone: string


}