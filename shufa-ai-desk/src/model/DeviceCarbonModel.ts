import { BaseModel } from '@/model/BaseModel'

export interface DeviceCarbonModel extends BaseModel {
    sn?: string
    hostMac?: string
    hostname?: string
    password?: string
    clientId?: number
}

export class DeviceCarbonModel implements DeviceCarbonModel {
    sn?: string
    hostMac?: string
    hostname?: string
    password?: string
    clientId?: number
}


export class DeviceCarbonRawModel {
    localAddress?: string
    remoteAddress?: string
    hostname?: string
    hostMac?: string
    version?: string
    relTime?: string
    synTime?: string
}