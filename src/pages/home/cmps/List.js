import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import homeAction from "../home-action"

import {
    ListWrapper,
    ListItem,
    ListInfo,
    ListMore
} from "../home-style"

class List extends React.PureComponent {
    render(){
        return(
            <ListWrapper>
                {
                    this.props.articleList.map(item=>{
                        return(
                            {/*
                                无传参：to="/detail"
                                动态路由传参：to={"/detail/"+item.get("id")}
                                地址传参：：to={"/detail?id="+item.get("id")}
                            */},
                            <Link
                                to={"/detail/"+item.get("id")}
                                key={item.get("id")}
                                target="_blank"
                            >
                                <ListItem>
                                    <img className="list-img" src={item.get("imgUrl")} alt="" />
                                    <ListInfo>
                                        <h3 className="title">{item.get("title")}</h3>
                                        <p className="desc">{item.get("desc")}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <ListMore onClick={this.props.getListMore}>阅读更多</ListMore>
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        articleList: state.getIn(["home","articleList"])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getListMore(){
            dispatch(homeAction.getListMore())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)