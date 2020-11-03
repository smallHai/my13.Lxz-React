import React from "react"
import { connect } from "react-redux"

import homeAction from "./home-action"

import Topic from "./cmps/Topic"
import List from "./cmps/List"
import Recommend from "./cmps/Recommend"
import Writer from "./cmps/Writer"
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./home-style"

// PureComponent和Component区别
// PureComponent内部自动执行了 shouldComponentUpdate声明周期
// 但是PureComponent一定要和immutable.js结合才有用
class Home extends React.PureComponent {

    componentDidMount(){
        this.props.getHomeData()
        this.bindScrollEvents()
    }
    componentWillUnmount(){
        this.unBindScrollEvents()
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="/static/banner.jpg" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>

                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>

                {
                    this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null
                }
            </HomeWrapper>
        )
    }

    handleScrollTop(){
        window.scrollTo(0, 0)
    }
    bindScrollEvents(){
        window.addEventListener("scroll", this.props.changeScrollTopShow)
    }
    unBindScrollEvents(){
        window.removeEventListener("scroll", this.props.changeScrollTopShow)
    }
}


const mapStateToProps = (state)=>{
    return {
        showScroll: state.getIn(["home","showScroll"])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getHomeData(){
            // 因为有redux-thunk，所以才可以dispatch一个函数
            dispatch(homeAction.getHomeData())
        },
        changeScrollTopShow(){
            let topValue = document.documentElement.scrollTop
            if(topValue > 200){
                dispatch(homeAction.changeScrollTopShow(true))
            }else{
                dispatch(homeAction.changeScrollTopShow(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)