import Loadable from 'react-loadable';
import Loading from '../common';


export const Home = Loadable({
    loader:()=>import('./home'),
    loading:Loading
})

export const AddFood = Loadable({
    loader:()=>import('./food/addFood'),
    loading:Loading
})

export const FoodList = Loadable({
    loader:()=>import('./food/foodList'),
    loading:Loading
})

export const UserInfo = Loadable({
    loader:()=>import('./users/userInfo'),
    loading:Loading
})

export const UserList = Loadable({
    loader:()=>import('./users/userList'),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import('./login'),
    loading:Loading
})