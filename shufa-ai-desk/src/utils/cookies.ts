/**
 * <p>Cookie</p>

 * @version 21:19 2022/6/4
 */
import Cookies from 'js-cookie'
import Keys from '../constant/key'
import { UserInfoModel } from "@/model/UserModel";

export const getUser = (): UserInfoModel | void =>  {
    const user = Cookies.get(Keys.userKey) as string
    if (user) return JSON.parse(user) as UserInfoModel
    return
}
export const setUser = (user: UserInfoModel ) => Cookies.set(Keys.userKey, JSON.stringify(user))
export const removeUser = () => Cookies.remove(Keys.userKey)
