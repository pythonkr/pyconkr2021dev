import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import Link from 'next/link';

export const GuideContributeBlock = styled.div`
    font-size: 1.75rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    line-height: 3rem;
    h1 {
        font-size: 4rem;
        color: #F5DF4D;
        @media (max-width: 768px) {
            font-size: 3.5rem;
        }
    }
    h2 {
        font-size: 3rem;
        color: #F5DF4D;
        span {
            text-decoration: underline 10px;
        }
    }
`;

function GotoContribute() {
    return (
        <ContentBackgroundBlock>
            <GuideContributeBlock>
                <h1>파이콘 한국 2021 기여하기</h1>
                <p>파이콘 한국 2021 CFP 신청이 마감되었습니다.</p>
            </GuideContributeBlock>
        </ContentBackgroundBlock>

    )
}

export default GotoContribute;
