import { fromJS } from "immutable"

const headerAction = {
    searchFocus(){
        return{
            type: "search-input-focus"
        }
    },
    searchBlur(){
        return{
            type: "search-input-blur"
        }
    },
    mouseEnter(){
        return{
            type: "mouse-enter"
        }
    },
    mouseLeave(){
        return{
            type: "mouse-leave"
        }
    },
    changePage(page, totalPage){
        if(page >=totalPage){
            page = 1
        }else{
            page++
        }
        return{
            type: "change-page",
            page: page
        }
    },
    getList(){
        return (dispatch)=>{
            fetch("/api/headerList.json").then(res=>{return res.json()}).then(data=>{
                const action = {
                    type: "header-list",
                    // 引用类型会变成immutable对象
                    // 所以要多加个fromJS将数组变成immutable
                    // 来统一类型
                    list: fromJS(data.data),
                    totalPage: Math.ceil(data.data.length /10)
                }
                dispatch(action)
            }).catch(err=>{console.log(err)})
        }
    }
}

export default headerAction