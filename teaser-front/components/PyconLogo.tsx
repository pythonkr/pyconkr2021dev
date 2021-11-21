/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import useMobileDetect from '../hooks/useMobileDetect';

const PyconLogoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9rem;
  margin-bottom: 5rem;
  margin-right: 2rem;
  color: #f5df4d;
  @media (max-width: 768px) {
    width: 100vh;
    margin: 3rem 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 2rem;
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
  display: inline-flex;
  align-items: center;
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
  @media (max-width: 1199px) {
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
  const isMobile = useMobileDetect();
  return (
    <PyconLogoBlock>
      {!isMobile && (
        <TextBlock
          css={css`
            border-color: #939597;
            color: #939597;
            padding: 0;
            border-radius: 50%;
          `}>
          <PyImageBlock>
            <Image
              src="https://2021.pycon.kr/img/profile_wht.png"
              width={100}
              height={100}
              alt="python logo"
              layout="responsive"
            />
          </PyImageBlock>
        </TextBlock>
      )}
      <TextBlock
        css={css`
          padding-bottom: 1.3rem;
        `}>
        py
      </TextBlock>
      <TextBlock
        css={css`
          padding-bottom: 1.3rem;
        `}>
        con
      </TextBlock>
      <TextBlock
        css={css`
          border-color: #939597;
          color: #939597;
        `}>
        kr
      </TextBlock>
      <TextBlock>2021</TextBlock>
    </PyconLogoBlock>
  );
}

export default PyconLogo;
