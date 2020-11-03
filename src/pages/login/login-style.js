import styled from "styled-components"

const LoginWrapper = styled.div`
    background: #eeeeee;
    z-index: 0;
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
`

const LoginBox = styled.div`
    width: 400px;
    height: 200px;
    padding-top: 20px;
    margin: 50px auto;
    background: #ffffff;
    box-shadow: 0 0 8px rgba(0,0,0,0.2)

`

const LoginInput = styled.input`
    width: 200px;
    height: 30px;
    line-height: 30px;
    display: block;
    padding: 0 10px;
    margin: 15px auto;
    color: #777777;
`

const LoginButton = styled.div`
    width: 200px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0 10px;
    color: #ffffff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    cursor: pointer;
`

export {
    LoginWrapper,
    LoginBox,
    LoginInput,
    LoginButton
}