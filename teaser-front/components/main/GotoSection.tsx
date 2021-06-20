import styled from '@emotion/styled';
import Link from 'next/link';
import { ContentBackgroundBlock } from '../ContentBackground';


const GotoSectionBlock = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-top: 3rem;

    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
    }
`;


export function GotoSupport () {
    return (
        <ContentBackgroundBlock>
            <GotoSectionBlock>
                <h1>후원하기</h1>
                <p><Link href={`/contribute`}>파이콘 한국 2021 후원 안내 →</Link></p>
            </GotoSectionBlock>
        </ContentBackgroundBlock>
    )
}

export function GotoCoc () {
    return (
        <ContentBackgroundBlock>
            <GotoSectionBlock>
                <h1>행동강령</h1>
                <p><Link href={`/coc`}>파이콘 한국 2021 행동 강령 확인하기 →</Link></p>
            </GotoSectionBlock>
        </ContentBackgroundBlock>
    )
}