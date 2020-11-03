import React from "react"
import { connect } from "react-redux"

import {
    WriterWrapper,
    WriterTitle,
    Writeritem
} from "../home-style"

class Writer extends React.PureComponent {
    render(){
        return(
            <WriterWrapper>
                <WriterTitle>推荐作者</WriterTitle>
                {
                    this.props.writerList.map(item=>{
                        return (
                            <Writeritem key={item.get("id")}>
                                <img className="writer-img" src={item.get("photo")} alt="" />
                                <div className="writer-name">{item.get("name")}</div>
                            </Writeritem>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        writerList: state.getIn(["home","writerList"])
    }
}

export default connect(mapStateToProps,null)(Writer)