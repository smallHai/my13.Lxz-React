import { fromJS } from "immutable"

const defaultState = fromJS({
    isLogin: false
})
const reducer = function(state=defaultState, action){

    switch(action.type){
        case "to-login":
            return state.set("isLogin", action.data)
        case "to-logout":
            return state.set("isLogin", action.data)
        default:
            return state
    }
}

export default reducer
