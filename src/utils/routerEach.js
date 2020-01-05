import React from 'react';
import { Route, Redirect,Switch } from 'react-router-dom';




export default (routes)=>{

    function isLogin(item){
        if(item.path !== '/login' && item.meta.requirePass){
            if(localStorage.getItem('token')){
                return <item.component />
            }else{
                return <Redirect to="/login" />
            }
        }else{
            return <item.component />
        }
    }

    function childrenMap(childrenRoutes){
        return <Route path={childrenRoutes.path} key={childrenRoutes.key} render={()=>(
            <Switch>
                {
                    childrenRoutes.children.map((child)=>(
                        <Route path={child.path} key={child.key} render={()=>{
                            if(child.children){
                                return childrenMap(child)
                            }else{
                                
                                return isLogin(child);
                            }
                        }} />
                    ))
                }
                <Redirect to={childrenRoutes.children[0].path} />
            </Switch>
        )} />
    }

    return routes.map((item,index)=>{
        if(item.children){
            return childrenMap(item);
        }else{
            return <Route path={item.path} key={item.path} render={()=>{
                return isLogin(item);
            }} />
        }
    })
}