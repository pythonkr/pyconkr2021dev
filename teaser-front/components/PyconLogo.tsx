/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';

const PyconLogoBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 5rem;
    margin-right: 2rem;
    color: #F5DF4D;
    @media (max-width: 768px) {
        width: 100vh;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
`;


const TextBlock = styled.div`
    font-weight: 700;
    border-radius: 6rem;
    border: 1px solid #f5df4d;
    font-size: 5rem;
    padding: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    vertical-align: middle;
    margin: 1rem;

    @media (max-width: 768px) {
        margin: 0.5rem;
    }
    @media  (max-width: 1199px) {
        font-size: 2rem;
    }
`;

const PyImageBlock = styled.div`
    width: 10rem;
    height: 10rem;


    @media (max-width: 1199px) {
        width: 6rem;
        height: 6rem;
    }
`;


function PyconLogo() {
    return (
        <PyconLogoBlock>
            <TextBlock
                css={css`
                    border-color: #939597;
                    color: #939597;
                    padding: 0;
                    border-radius: 50%;
                `}
                ><PyImageBlock>
                    <Image src="https://pyconkr-2021.s3.ap-northeast-2.amazonaws.com/img/profile_wht.png" width={100} height={100} alt="python logo" layout="responsive"/>
                </PyImageBlock>
            </TextBlock>
            <TextBlock
                css={css`
                    padding-bottom: 2rem;
                `}
                >py</TextBlock>
            <TextBlock
                css={css`
                    padding-bottom: 2rem;
                `}
                >con</TextBlock>
            <TextBlock
                css={css`
                    border-color: #939597;
                    color: #939597;
                `}
                >kr</TextBlock>
            <TextBlock>2021</TextBlock>
        </PyconLogoBlock>

    )
}

export default PyconLogo;
