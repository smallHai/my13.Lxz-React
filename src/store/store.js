import { createStore, compose, applyMiddleware } from "redux"
import headerReducer from "../common/header/header-reducer"
import homeReducer from "../pages/home/home-reducer"
import detailReducer from "../pages/detail/detail-reducer"
import loginReducer from "../pages/login/login-reducer"

// redux-immutable同immutable一个作用，这里主要用来统一数据都是immutable格式
// 把combineReducers从redux换到这里
import { combineReducers } from "redux-immutable"

// 原先action里的处理函数返回的是一个对象
// 用了thunk就可以返回一个函数
// 这个函数还能接收一个dispatch参数
// 并且因为它返回的是函数，就可以在函数里做其它操作，比如请求数据
// 这样就能把获取数据拆分到action里
import reduxThunk from "redux-thunk"

// 使用redux-dectools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(reduxThunk)
))
export default store