/**
 * <p>系统常量 </p>

 * @version 15:59 2022/6/22
 */
export class SysConstant {

    /**
     * 系统名称
     */
    public static title: string = 'AI'

    /**
     * 认证
     */
    public static authorizer: string = ''

    /**
     * 备案号
     */
    public static record: string = ''

    /**
     * 系统端口
     */
    public static port: number = 4000

    /**
     * 系统端口
     */
    public static baseUrl: string = '/api'
}


class Constant {
    public key: any
    public value: any
}


export const ApplyConstant: Constant[] = [
    {
        key: 'NOBODY',
        value: '未操作'
    },
    {
        key: 'AGREE',
        value: '已批准'
    },
    {
        key: 'REFUSE',
        value: '拒绝申请'
    }
]

export const StatusConstant: Constant[] = [
    {
        key: '0',
        value: '否'
    },
    {
        key: '1',
        value: '是'
    }
]


export const VisibilityConstant: Constant[] = [
    {
        key: '0',
        value: '不可见'
    },
    {
        key: '1',
        value: '公开'
    },
    {
        key: '2',
        value: '行业文章'
    }
]

export const LoginWayConstant: Constant[] = [
    {
        key: '0',
        value: '密码登录'
    },
    {
        key: '1',
        value: '验证码登录'
    },
    {
        key: '2',
        value: '主动退出'
    },
    {
        key: '3',
        value: '超时退出'
    }
]
