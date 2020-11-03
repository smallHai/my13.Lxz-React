import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Write extends React.PureComponent {

    render(){
        if(this.props.isLogin){
            return <div>写文章</div>
        }else{
            return <Redirect to="/login"></Redirect>
        }
    }
}


const mapStateToProps = (state)=>{
    return {
        isLogin: state.getIn(["login", "isLogin"])
    }
}

export default connect(mapStateToProps, null)(Write)