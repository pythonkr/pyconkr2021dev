import styled from '@emotion/styled';

export const GuideContributeBlock = styled.div`
    font-weight: 700;
    padding-top: 2rem;
    padding-bottom: 3rem;
    padding-right: 7rem;
    padding-left: 20%;
    padding-right: 20%;

    h1 {
        font-size: 4rem;
    }
    h3 {
        font-size: 2rem;
    }
`;

function GotoContribute() {
    return (
        <GuideContributeBlock>
            
                <h1>파이콘 한국 2021 기여하기</h1>
                <h3>키노트 연사 신청하기 → </h3>
                <h3>파이콘 2021 CFP 폼 → </h3>
            
        </GuideContributeBlock>
    )
}

export default GotoContribute;