import styled from '@emotion/styled';

export const ContentBackgroundBlock = styled.div`
    padding-top: 5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media (max-width: 768px) {
        width: 100vh;
        padding: 5rem 2rem;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        padding: 5rem 2rem;
    }
    @media (min-width: 1200px) and (max-width: 1539px) {
        padding: 0 5rem;
    }
`;
