import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import Link from 'next/link';

export const GuideContributeBlock = styled.div`
    font-size: 1.75rem;
    line-height: 1.5;
    h1 {
        font-size: 4rem;
        color: #f5df4d;
        margin: 2rem 0;
        @media (max-width: 768px) {
            font-size: 3.5rem;
        }
    }
    h2 {
        font-size: 3rem;
        color: #f5df4d;
        margin: 2rem 0;
        span {
            text-decoration: underline 10px;
        }
    }
`;

export const GuideContributeText = styled.p`
    padding-bottom: 5rem;
    @media (max-width: 768px) {
        padding-bottom: 0;
    }
`;

function GotoContribute() {
    return (
        <ContentBackgroundBlock>
            <GuideContributeBlock>
                <h2>
                    <span>파이콘 한국 2021 기여하기</span>
                </h2>
                <GuideContributeText>파이콘 한국 2021 CFP 신청이 마감되었습니다.</GuideContributeText>
            </GuideContributeBlock>
        </ContentBackgroundBlock>
    );
}

export default GotoContribute;
