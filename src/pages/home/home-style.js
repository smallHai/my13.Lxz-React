import styled from "styled-components"

const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    background: #ffffff;
    overflow: hidden;
`

const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`

const HomeRight = styled.div`
    width: 280px;
    padding-top: 30px;
    float: right;
`

const BackTop = styled.div`
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #dddddd;
    background: #ffffff;
    position: fixed;
    right: 100px;
    bottom: 30px;
`

const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -20px;
    border-bottom: 1px solid #dcdcdc;
`

const TopicItem = styled.div`
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    float: left;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    .topic-img{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

const ListWrapper = styled.div`
    width: 100%;
    padding-bottom: 20px;
`

const ListItem = styled.div`
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-img {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`

const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
        color: #333333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999999;
    }
`

const ListMore = styled.div`
    height: 40px;
    line-height: 40px;
    margin: 30px auto;
    background: #a5a5a5;
    border-radius: 20px;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
`

const RecommendWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;
`

const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-indent: 30px;
    border-radius: 3px;
    margin-bottom: 10px;
    font-size: 18px;
    cursor: pointer;
    color: ${(props)=>(props.color)};
    background: ${(props)=>(props.background)};
`

const WriterWrapper = styled.div``

const WriterTitle = styled.h3`
    font-size: 14px;
    color: #969696;
`

const Writeritem = styled.div`
    height: 48px;
    line-height: 48px;
    margin-top: 15px;
    overflow: hidden;
    cursor: pointer;
    .writer-img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: block;
        float: left;
        margin-right: 15px;
    }
    .writer-name {
        float: left
        font-size: 14px;
        color: #333333;
    }
`


export {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
    TopicWrapper,
    TopicItem,
    ListWrapper,
    ListItem,
    ListInfo,
    ListMore,
    RecommendWrapper,
    RecommendItem,
    WriterWrapper,
    WriterTitle,
    Writeritem
}