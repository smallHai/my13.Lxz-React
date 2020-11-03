import React from "react"
import { connect } from "react-redux"

import {
    RecommendWrapper,
    RecommendItem
} from "../home-style"

class Recommend extends React.PureComponent {
    render(){
        return(
            <RecommendWrapper>
                {
                    this.props.recommendList.map(item=>{
                        return (
                            <RecommendItem key={item.get("id")} color={item.get("color")} background={item.get("background")}>{item.get("title")}</RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        recommendList: state.getIn(["home","recommendList"])
    }
}

export default connect(mapStateToProps,null)(Recommend)