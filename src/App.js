import React from 'react';

// redux使用
import store from "./store/store"
import { Provider } from "react-redux"

// react路由
import { BrowserRouter, Route } from "react-router-dom"

import Header from "./common/header/header"
import Home from "./pages/home/home"
// 常规组件： import Detail from "./pages/detail/detail"
// 异步组件： import Detail from "./pages/detail/detail-loadable"
import Detail from "./pages/detail/detail-loadable"
import Login from "./pages/login/login"
import Write from "./pages/write/write"


function App() {
    return (
        <Provider store={store}>
            {/*Provider包含的组件就能使用store里的数据*/}
            <BrowserRouter>
                <Header></Header>
                <Route path="/" exact component={Home}></Route>
                {/*
                    常规路由：<Route path="/detail" exact component={Detail}></Route>
                    动态路由：<Route path="/detail/:id" exact component={Detail}></Route>
                    用地址传参的方式，就用常规路由
                */}
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/write" exact component={Write}></Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

// 复杂写法
// <Route path="/" exact render={()=>{return <Home></Home>}}></Route>
// <Route path="/detail" exact render={()=>{return <Detail></Detail>}}></Route>