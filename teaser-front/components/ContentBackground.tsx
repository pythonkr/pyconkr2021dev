import styled from '@emotion/styled';

export const ContentBackgroundBlock = styled.div`
    padding-top: 5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5rem;

    @media (max-width: 768px) {
        width: 100vh;
        padding: 2rem;
    }
`;
