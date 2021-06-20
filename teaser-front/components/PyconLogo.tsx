/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from "@emotion/react";
import Image from 'next/image';
import Pyicon from '../public/img/profile_wht.png';

const PyconLogoBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 5rem;
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
                    padding-top: 1rem;
                    padding-right: 1rem;
                    padding-left: 1rem;
                `}
                ><Image src={Pyicon} alt="python logo" width={175} height={175}/></TextBlock>
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