import { fromJS } from "immutable"

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    showScroll: false
})
const reducer = function(state=defaultState, action){

    switch(action.type){
        case "get-home-data":
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case "get-home-list":
            let newArticleList = state.get("articleList").concat(fromJS(action.articleList))
            return state.set("articleList", newArticleList)
        case "scroll-top-show":
            return state.set("showScroll", action.showScroll)
        default:
            return state
    }
}

export default reducer
