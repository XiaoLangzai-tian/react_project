import {
    Home,AddFood,FoodList,UserInfo,UserList,Login
} from '../pages';

export const LayoutRoutes = [
    {
        path:'/home',
        component:Home,
        meta:{
            flag:true,
            requirePass:true
        },
        icon:'',
        key:'/home',
        text:'系统首页'
    },
    {
        path:'/foods',
        meta:{
            flag:true,
            requirePass:true
        },
        key:'/foods',
        children:[
            {
                path:'/foods/foodList',
                component:FoodList,
                meta:{
                    flag:true,
                    requirePass:true
                },
                key:'/foods/foodList',
                icon:'',
                text:'餐饮列表'
            },
            {
                path:'/foods/addFood',
                component:AddFood,
                meta:{
                    flag:true,
                    requirePass:true
                },
                key:'/foods/addFood',
                icon:'',
                text:'添加餐点'
            }
        ],
        icon:'',
        text:'餐饮管理'
    },
    
    {
        path:'/user',
        meta:{
            flag:true,
            requirePass:true
        },
        key:'/user',
        children:[
            {
                path:'/user/userList',
                component:UserList,
                meta:{
                    flag:true,
                    requirePass:true
                },
                icon:'',
                key:'/user/userList',
                text:'用户列表'
            },
            {
                path:'/user/userInfo',
                component:UserInfo,
                meta:{
                    flag:true,
                    requirePass:true
                },
                icon:'',
                key:'/user/userInfo',
                text:'用户信息'
            }
        ],
        icon:'',
        text:'用户管理'
    }
]
export const NoLayoutRoutes = [
    {
        path:'/login',
        component:Login,
        meta:{}
    }
]
export const RouteConfig = LayoutRoutes.concat(NoLayoutRoutes);