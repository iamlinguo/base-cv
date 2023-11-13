import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "../layout/index"

/**
 * <p>路由</p>

 * @version 13:24 2022/6/3
 */
const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/404',
        name: '404',
        component: () => import('../components/result/404')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    },

]

const moduleRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/check',
        meta: {
            title: '人脸检测',
            icon: '#icondashboard',
            affix: true,
        },
        name: "Check",
        children: [
            {
                path: '/check',
                component: () => import('../views/check/index.vue'),
                name: "Check",
                meta: {
                    title: '人脸检测',
                    icon: '#icondashboard',
                    affix: true,
                }
            },
        ]
    },
    {
        path: '/search',
        component: Layout,
        redirect: '/search',
        meta: {
            title: '人脸库搜索',
            icon: '#icondashboard',
            affix: true,
        },
        name: "Search",
        children: [
            {
                path: '/search',
                component: () => import('../views/search/index.vue'),
                name: "Search",
                meta: {
                    title: '人脸库搜索',
                    icon: '#icondashboard',
                    affix: true,
                }
            },
        ]
    },

]


const routes: Array<RouteRecordRaw> = [
    ...constantRoutes,
    ...moduleRoutes,
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

const filterAsyncRoutes = (routes: RouteRecordRaw[]) => {
    const res: RouteRecordRaw[] = []
    routes.forEach(route => {
        const r = { ...route }
        if (r.children) {
            r.children = filterAsyncRoutes(r.children)
        }

        res.push(r)


    })
    return res
}

export const AsyncRoutes = filterAsyncRoutes(moduleRoutes)
