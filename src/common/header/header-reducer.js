// immutable.js防止对state的直接修改
import { fromJS } from "immutable"

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})
const reducer = function(state=defaultState, action){

    switch(action.type){
        case "search-input-focus":
            return state.set("focused", true)
        case "search-input-blur":
            return state.set("focused", false)
        case "header-list":
            // return state.set("list", action.list).set("totalPage", action.totalPage)
            return state.merge({
                "list": action.list,
                "totalPage": action.totalPage
            })
        case "mouse-enter":
            return state.set("mouseIn", true)
        case "mouse-leave":
            return state.set("mouseIn", false)
        case "change-page":
            return state.set("page", action.page)
        default:
            return state
    }

    /*
    // let newState = JSON.parse(JSON.stringify(state))
    if(action.type ==="search-input-focus"){
        // newState.focused = true
        // return newState
        return state.set("focused", true) // immutable写法
    }
    if(action.type ==="search-input-blur"){
        // newState.focused = false
        // return newState
        return state.set("focused", false) // immutable写法
    }
    if(action.type ==="header-list"){
        return state.set("list", action.list)
    }
    return state
    */
}

export default reducer
