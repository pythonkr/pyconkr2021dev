import styled from '@emotion/styled';
import {GuideContributeBlock} from './GotoContribute';

const AboutFundingBlock = styled.div`
    height: 25rem;
    width: 100%;
    background-color: #f5df4d;
    border-radius: 1rem;
    
`;

function FundingPyconkit () {
    return(
        <GuideContributeBlock>
            <h1>2021 PYCON KIT</h1>
            <h3>2021 파이콘 한국 굿즈 펀딩하기</h3>
            <AboutFundingBlock></AboutFundingBlock>
        </GuideContributeBlock>
    )
}

export default FundingPyconkit;