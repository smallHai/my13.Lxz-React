import React from "react"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import headerAction from "./header-action"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from "./header-style"

const showSearchInfoDiv = (props)=>{
    const {
        focused,
        list,
        page,
        totalPage,
        handleMouseEnter,
        handleMouseLeave,
        handleChangePage,
        mouseIn
    } = props
    let jsList = list.toJS()
    let pageList = []
    let spinIcon = null

    if(jsList.length){
        for(let i=(page-1)*10; i<page*10; i++){
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
        }
    }
    if(focused || mouseIn){
        return(
            <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>{handleChangePage(page, totalPage, spinIcon)}}>
                        <i ref={(icon)=>{spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一换
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>{pageList}</SearchInfoList>
            </SearchInfo>
        )
    }else{
        return null
    }
}

class Header extends React.Component {
    render(){
        const {
            focused,
            list,
            handleInputFocus,
            handleInputBlur,
            isLogin,
            handleLogout
        } = this.props
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo></Logo>
                </Link>
                <Nav>
                    <Link to="/">
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载App</NavItem>
                    {
                        isLogin ?
                        <NavItem className="right" onClick={handleLogout}>退出</NavItem> :
                        <Link to="/login">
                            <NavItem className="right">登陆</NavItem>
                        </Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused? "focused":""}
                                onFocus={()=>{handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={focused? "focused iconfont zoom":"iconfont zoom"}
                        >&#xe614;</i>
                        {showSearchInfoDiv(this.props)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writing">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        // focused: state.get("header").get("focused") 以下写法功能一样
        focused: state.getIn(["header", "focused"]),
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        isLogin: state.getIn(["login", "isLogin"])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
            // 此函数在事件上传参的时候为啥要再套一层函数？
            // 为啥不加那层函数就会有问题
            if(list.size ===0){
                dispatch(headerAction.getList())
            }
            dispatch(headerAction.searchFocus())
        },
        handleInputBlur(){
            dispatch(headerAction.searchBlur())
        },
        handleMouseEnter(){
            dispatch(headerAction.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(headerAction.mouseLeave())
        },
        handleChangePage(page, totalPage, spinIcon){
            let ang = spinIcon.style.transform.replace(/[^0-9]/ig,"")
            if(ang){
                ang = parseInt(ang, 10)
            }else{
                ang = 0
            }
            spinIcon.style.transform = "rotate("+(ang+360)+"deg)" // 每次都加360度
            dispatch(headerAction.changePage(page, totalPage))
        },

        handleLogout(){
            const action = {
                type: "to-logout",
                data: false
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)



// 无状态组件--组件里只有一个render函数
/*
const Header = (props)=>{
    return(
        <HeaderWrapper>
            {
                // <Logo href="/"></Logo>
            }
            <Logo></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused? "focused":""}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i
                        className={props.focused? "focused iconfont":"iconfont"}
                    >&#xe614;</i>
                    {showSearchInfoDiv(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">
                    <i className="iconfont">&#xe615;</i>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
*/

// 正常组件
/*
class Header extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                {
                    // <Logo href="/"></Logo>
                }
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused? "focused":""}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={this.props.focused? "focused iconfont":"iconfont"}
                        >&#xe614;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
*/