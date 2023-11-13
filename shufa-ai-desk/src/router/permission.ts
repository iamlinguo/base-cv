import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * @description 路由守卫

 * @version 0:28 2022/6/5
 */
const whiteList: Array<string> = ['/login', '/404', '/register']

/**
 * 加载条
 */
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
    NProgress.done()
})

router.afterEach((to) => {
    NProgress.done()
})