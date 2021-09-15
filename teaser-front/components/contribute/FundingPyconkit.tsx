import styled from '@emotion/styled';
import {GuideContributeBlock} from './GotoContribute';
import { ContentBackgroundBlock } from '../ContentBackground';

const FundingTextBig = styled.div`
    font-size: 2rem;
`
const FundingTextSmall = styled.div`
    margin-top: 0.3rem;
    font-size: 1.3rem;
`

const FundingLink = styled.a`
    display: inline-block;
    background-color: #F5DF4D;
    color: black;
    border-radius: 4rem;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 10rem;
    margin: 2rem 0 3rem;
`

function FundingPyconkit () {
    return(
        <>
            <ContentBackgroundBlock>
                <GuideContributeBlock>
                    <div>
                        <h1>PYCON KOREA 2021 KIT</h1>
                        <FundingTextBig>
                            파이콘 한국 2021 굿즈 펀딩하기
                        </FundingTextBig>
                        <FundingTextSmall>파이콘 한국 2021 굿즈는 참가 등록시 함께 구입하실 수 있습니다.</FundingTextSmall>
                    </div>
                    <FundingLink href="https://festa.io/events/1788/">참가 등록</FundingLink>
                </GuideContributeBlock>
            </ContentBackgroundBlock>
        </>
    )
}

export default FundingPyconkit;