import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const Title = styled.h2`
    font-size: 3rem;
    color: #f5df4d;
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;
const Container = styled.div`
    padding: 0 5rem 5rem;
`;
const Content = styled.p`
    font-size: 1.75rem;
    line-height: 1.5;
`;

const Custom404 = () => {
    return (
        <Layout>
            <Container>
                <Title>해당하는 페이지를 찾을 수 없습니다.</Title>
                <Content>
                    주소를 확인해주세요. 혹은 현재 페이지가 작업 중일 수
                    있습니다.
                </Content>
            </Container>
        </Layout>
    );
};

export default Custom404;
