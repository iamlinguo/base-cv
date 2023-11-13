import { BaseModel } from '@/model/BaseModel'

export interface DeviceMeterModel extends BaseModel {
    sn?: string
    password?: string
    clientId?: number
}

export class DeviceMeterModel implements DeviceMeterModel {
    sn?: string
    password?: string
    clientId?: number
    clientName?: string
    type?: string
    phoneNumber?: string
    moduleNumber?: string
    heartFrequency?: number
    energyMagnification?: number
    voltageMagnification?: number
    currentMagnification?: number
    powerMagnification?: number

}

export class DeviceMeterRawModel {
    isSwitch?: string
    lastTime?: string
    u?: string
    i?: string
    f?: string
    p?: string
    e?: string
    fVer?: string
    relTime?: string
    synTime?: string
    deviceSn?: string
}

export class Device4GMeterRawModel {
    deviceSn?: string
    synTime?: string
    powerFactory?: string
    deviceTime?: string
    energy?: string
    jenergy?: string
    fenergy?: string
    penergy?: string
    genergy?: string
    voltage?: string
    current?: string
    power?: string
}


export class Device4G3PhaseMeterRawModel {
    deviceSn?: string
    synTime?: string
    powerFactory?: string
    deviceTime?: string
    energy?: string
    jenergy?: string
    fenergy?: string
    penergy?: string
    genergy?: string
    avoltage?: string
    acurrent?: string
    apower?: string
    apowerFactory?: string
    bvoltage?: string
    bcurrent?: string
    bpower?: string
    bpowerFactory?: string
    cvoltage?: string
    ccurrent?: string
    cpower?: string
    cpowerFactory?: string
}