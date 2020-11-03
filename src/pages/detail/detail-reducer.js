import { fromJS } from "immutable"

const defaultState = fromJS({
    title: "",
    content: ""
})
const reducer = function(state=defaultState, action){

    switch(action.type){
        case "get-article":
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state
    }
}

export default reducer
