import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import {
    LoginWrapper,
    LoginBox,
    LoginInput,
    LoginButton
} from "./login-style"

class Login extends React.PureComponent {

    render(){
        if(this.props.isLogin){
            return <Redirect to="/"></Redirect>
        }else{
            return(
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput
                            placeholder="请输入账号"
                            innerRef={input=>{return this.account = input}}
                        ></LoginInput>

                        <LoginInput
                            placeholder="请输入密码"
                            innerRef={input=>{return this.password = input}}
                            type="password"
                        ></LoginInput>

                        <LoginButton
                            onClick={()=>{this.props.handleLogin(this.account, this.password)}}
                        >登陆</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}


const mapStateToProps = (state)=>{
    return {
        isLogin: state.getIn(["login", "isLogin"])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleLogin(accountElem, passwordElem){

            let reqUrl = `/api/login.json?account=${accountElem.value}&password=${passwordElem.value}`
            fetch(reqUrl).then(res=>{return res.json()}).then(data=>{
                if(data.data){
                    const action = {
                        type: "to-login",
                        data: data.data
                    }
                    dispatch(action)
                }else{
                    alert("登陆失败")
                }
            }).catch(err=>{console.log(err)})

            // 上面的innerRef是styled-components提供的
            // console.log(accountElem.value, passwordElem.value)
            /*
            let formData = {
                account: accountElem.value,
                password: passwordElem.value
            }
            fetch("/api/login.json",{
                method: "POST",
                body: JSON.stringify(formData)
            }).then(res=>{return res.json()}).then(data=>{
                const action = {
                    type: "to-login",
                    data: data.data
                }
                dispatch(action)
            }).catch(err=>{console.log(err)})
            */
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)