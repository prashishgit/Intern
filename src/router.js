import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    },

    {
        path: '/dashboard',
        component: Layout,
        // meta: { title: 'Example', icon: 'example' },
        children: [
            // {
            //     path: 'table',
            //     name: 'Table',
            //     component: () => import('@/views/table/index'),
            //     meta: { title: 'Table', icon: 'icon-shoujitianchong' }
            // },
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/index'),
                // meta: { title: 'Tree', icon: 'tree' }
                meta: { title: 'Dashboard', icon: 'icon-shoujitianchong' }
            },
            
        ]
    },
    {
        path: '/table',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'table',
                component: () => import('@/views/table/index'),
                meta: { title: 'Table', icon: 'icon-xinfengtianchong' }
            },
        ]
    },
    {
        path: 'edit',
        name: 'Edit',
        component: () => import('@/views/form/edit')
    },

    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: { title: 'Form', icon: 'icon-xinfengtianchong' }
            }
        ]
    },

    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'nested',
        meta: {
            title: 'nested',
            icon: 'icon-wenbenbianjitianchong'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'menu1',
                meta: { title: 'menu1' },
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/nested/menu1/menu1-1'),
                        name: 'menu1-1',
                        meta: { title: 'menu1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'menu1-2',
                        meta: { title: 'menu1-2' },
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'menu1-2-1',
                                meta: { title: 'menu1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'menu1-2-2',
                                meta: { title: 'menu1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/nested/menu1/menu1-3'),
                        name: 'menu1-3',
                        meta: { title: 'menu1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                meta: { title: 'menu2' }
            }
        ]
    },

    { path: '*', redirect: '/404', hidden: true }
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
