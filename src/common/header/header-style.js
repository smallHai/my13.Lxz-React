import styled from "styled-components"

const HeaderWrapper = styled.div`
    width: 100%;
    height: 56px;
    background: #ffffff;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    z-index: 1;
`

const Logo = styled.div`
    width: 100px;
    height: 58px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("/static/logo.png");
    background-size: contain;
`

// width: 960px;
const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 60px;
    box-sizing: border-box;
`

const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    cursor: pointer;
    &.left {
        float: left;
        color: #333333;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

const SearchWrapper = styled.div`
    float: left;
    position: relative
    .zoom{
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        position: absolute;
        right: 5px;
        bottom: 5px;
        &.focused {
            color: #ffffff;
            background: #777777;
        }
    }
`

// 搜索框的动画用transition: width 1s ease;也可以
const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eeeeee;
    font-size: 14px;
    color: #666666;

    &::placeholder {
        color: #999999;
    }
    &.focused {
        width: 230px;
    }
    &.slide-enter {
        transition: all 0.2s ease-out;
    }
    &.slide-enter-active {
        width: 230px
    }
    &.slide-exit-active {
        width: 160px
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
`
const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background: #ffffff;
    box-shadow: 0 0 8px rgba(0,0,0,0.2)
`

const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: inline-block;
        font-size: 12px;
        margin-right 2px;
        transition: all 0.2s ease-in;
        transform-origin: center center;
    }
`

const SearchInfoList = styled.div`
    overflow: hidden;
`

const SearchInfoItem = styled.a`
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #dddddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;
    display: block;
    float: left;
`


const Addition = styled.div`
    height: 56px;
    position: absolute;
    top: 0;
    right: 0;
`

const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #ffffff;
        background: #ec6149;
    }
`




export {
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
}