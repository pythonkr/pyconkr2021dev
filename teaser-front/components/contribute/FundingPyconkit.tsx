import styled from '@emotion/styled';
import {GuideContributeBlock} from './GotoContribute';
import { ContentBackgroundBlock } from '../ContentBackground';

const FundingText = styled.div`
    font-size: 1.75rem;
`
const FundingLink = styled.a`
    display: inline-block;
    background-color: #F5DF4D;
    color: black;
    border-radius: 4rem;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 10rem;
    margin: 3rem 0;
`

function FundingPyconkit () {
    return(
        <>
            <ContentBackgroundBlock>
                <GuideContributeBlock>
                    <div>
                        <h1>PYCON KOREA 2021 KIT</h1>
                        <FundingText>파이콘 한국 2021 굿즈는 참가 등록시 함께 구입하실 수 있습니다.</FundingText>
                    </div>
                    <FundingLink href="https://festa.io/events/1788/">참가 등록</FundingLink>
                </GuideContributeBlock>
            </ContentBackgroundBlock>
        </>
    )
}

export default FundingPyconkit;
