const homeAction = {
    getHomeData(){
        return (dispatch)=>{
            fetch("/api/home.json").then(res=>{return res.json()}).then(data=>{
                const action = {
                    type: "get-home-data",
                    topicList: data.data.topicList,
                    articleList: data.data.articleList,
                    recommendList: data.data.recommendList,
                    writerList: data.data.writerList
                }
                dispatch(action)
            }).catch(err=>{console.log(err)})
        }
    },

    getListMore(){
        return (dispatch)=>{
            fetch("/api/homeList.json").then(res=>{return res.json()}).then(data=>{
                const action = {
                    type: "get-home-list",
                    articleList: data.data
                }
                dispatch(action)
            }).catch(err=>{console.log(err)})
        }
    },

    changeScrollTopShow(flag){
        return (dispatch)=>{
            const action = {
                type: "scroll-top-show",
                showScroll: flag
            }
            dispatch(action)
        }
    }
}

export default homeAction