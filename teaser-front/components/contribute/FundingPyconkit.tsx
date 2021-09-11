import styled from '@emotion/styled';
import {GuideContributeBlock} from './GotoContribute';
import { ContentBackgroundBlock } from '../ContentBackground';
import { RegisterButtonBlock } from '../main/MainView';
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
        <>
            <ContentBackgroundBlock>
                <GuideContributeBlock>
                    <div>
                        <h1>PYCON KOREA 2021 KIT</h1>
                        <h3>
                            파이콘 한국 2021 굿즈 펀딩하기
                        </h3>
                        {/* <ComingSoonBlock>Coming Soon...</ComingSoonBlock> */}
                        <p>파이콘 한국 2021 굿즈는 참가등록시 함께 구입하실 수 있습니다.</p>
                    </div>
                    <RegisterButtonBlock style={{width: 200, padding: 2, fontSize: 20}}>
                                <a href="https://festa.io/events/1788/">참가등록</a>
                    </RegisterButtonBlock>
                </GuideContributeBlock>
            </ContentBackgroundBlock>

            {/* <ContentBackgroundBlock>
                <RegisterButtonBlock>
                    <a href="https://festa.io/events/1788/">참가 등록</a>
                </RegisterButtonBlock>
            </ContentBackgroundBlock> */}
        </>
    )
}

export default FundingPyconkit;