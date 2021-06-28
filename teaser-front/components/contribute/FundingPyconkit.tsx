import styled from '@emotion/styled';
import {GuideContributeBlock} from './GotoContribute';
import { ContentBackgroundBlock } from '../ContentBackground';
const AboutFundingBlock = styled.div`
    height: 25rem;
    background-color: #f5df4d;
    border-radius: 1rem;
    width: 40rem;
`;
const ComingSoonBlock = styled.h3`
    color: #939597;
`;

function FundingPyconkit () {
    return(
        <ContentBackgroundBlock>
            <GuideContributeBlock>
                <div>
                    <h1>2021 PYCON KIT</h1>
                    <h3>2021 파이콘 한국 굿즈 펀딩하기</h3>
                    <ComingSoonBlock>Coming Soon...</ComingSoonBlock>
                </div>
            </GuideContributeBlock>
        </ContentBackgroundBlock>
        
    )
}

export default FundingPyconkit;
