import React from "react"
import { connect } from "react-redux"

// 当使用异步组件的时候，要用这个才能获取参数
import { withRouter } from "react-router-dom"

import {
    DetailWrapper,
    DetailHeader,
    DetailContent
} from "./detail-style"

class Detail extends React.PureComponent {

    componentDidMount(){
        {/*
            动态路由获取参数：this.props.match.params.id
            常规地址获取参数：this.props.location.search =>自己还要再解析
        */}

        console.log(this.props)
        this.props.getArticle(this.props.match.params.id)
    }

    render(){
        const {title, content} = this.props
        return(
            <DetailWrapper>
                <DetailHeader>{title}</DetailHeader>
                <DetailContent dangerouslySetInnerHTML = {{ __html: content }}>
                    {
                        /*
                        <img className="content-img" alt="" src="/static/detail.jpg" />
                        <p className="content-text">阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力</p>
                        <p className="content-text">阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力</p>
                        <p className="content-text">阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力</p>
                        <p className="content-text">阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力</p>
                        <p className="content-text">阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力阅读的价值在于它唤醒了我们的思考力</p>
                        */
                    }
                </DetailContent>
            </DetailWrapper>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        title: state.getIn(["detail", "title"]),
        content: state.getIn(["detail", "content"])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getArticle(id){
            fetch("/api/detail.json?id="+id).then(res=>{return res.json()}).then(data=>{
                const action = {
                    type: "get-article",
                    title: data.data.title,
                    content: data.data.content
                }
                dispatch(action)
            }).catch(err=>{console.log(err)})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))