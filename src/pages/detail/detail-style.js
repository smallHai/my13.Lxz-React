import styled from "styled-components"

const DetailWrapper = styled.div`
    width: 660px;
    margin: 0 auto;
    padding-bottom: 100px;
    background: #ffffff;
`

const DetailHeader = styled.div`
    width: 100%;
    margin: 50px 0 20px 0;
    font-size: 24px;
    color: #333333;
    font-weight: bold;
`

const DetailContent = styled.div`
    width: 100%;
    color: #2f2f2f;
    .content-img {
        width: 100%;
    }
    .content-text {
        margin: 20px 0;
        color: #2f2f2f;
        font-size: 16px;
        line-height: 30px;
    }
`


export {
    DetailWrapper,
    DetailHeader,
    DetailContent
}