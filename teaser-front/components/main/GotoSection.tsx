import styled from '@emotion/styled';

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
        <GotoSectionBlock>
            <h1>후원하기</h1>
            <p>파이콘 한국 2021 후원 안내 →</p>
        </GotoSectionBlock>
    )
}

export function GotoCoc () {
    return (
        <GotoSectionBlock>
            <h1>행동강령</h1>
            <p>파이콘 한국 2021 행동 강령 확인하기 →</p>
        </GotoSectionBlock>
    )
}