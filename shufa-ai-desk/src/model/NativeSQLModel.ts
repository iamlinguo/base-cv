
export interface NativeSQLModel {
    nativeSQL?: string
    password?: string
}

export class NativeSQL implements NativeSQLModel {
    nativeSQL: string | undefined
    password: string | undefined
}

