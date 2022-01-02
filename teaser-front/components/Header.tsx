import Link from 'next/link';
import styled from '@emotion/styled';
import { useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import useMobileDetect from '../hooks/useMobileDetect';
import MobileHeader from './MobileHeader';

type CategoriesType = CategoryType[];

type CategoryType = {
  name: string;
  text: string;
};

const categories: CategoriesType = [
  {
    name: 'about',
    text: 'ABOUT',
  },
  {
    name: 'contribute',
    text: '기여하기',
  },
  {
    name: 'support',
    text: '후원하기',
  },
  {
    name: 'coc',
    text: '행동 강령',
  },
];

const Positionier = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 990;
  top: 0px;
  left: 0;
  right: 0;
  background-color: #121212;
`;

const HeaderContents = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100vh;
    justify-content: center;
  }
`;

const SupportToggle = styled.div`
  background-color: #121212;
  z-index: 995;
  color: white;
  position: absolute;
  top: 75%;
  left: 0;
  right: 0;
  padding: 0 0.8rem;
  font-size: 1rem;
  word-break: keep-all;

  @media (max-width: 1280px) {
    width: 150%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const RightCategoryBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Category = styled.div<{ active?: boolean }>`
  font-size: 1.25rem;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 3rem;
  text-align: center;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: #f5df4d;
    `}

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 1rem;
    padding: 3rem 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    padding: 2rem 0.5rem;
  }
`;

const SupportCategory = styled(Category)`
  margin: 0;
  padding: 1.5rem 0;
  font-size: 1.1rem;
  line-height: 1.5;

  a {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    margin: 0;
    font-size: 1rem;
    padding: 1.3rem 0;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin: 0;
  }
`;

function Header() {
  const router = useRouter();
  const [navSupport, setNavSupport] = useState<boolean>(false);
  const [isProgramOpen, setIsProgramOpen] = useState<boolean>(false);
  const isMobile = useMobileDetect();

  return !isMobile ? (
    <Positionier>
      <div>
        <HeaderContents>
          <Category active={router.pathname === '/'}>
            <Link href="/">
              <a>PYCON.KR 2021</a>
            </Link>
          </Category>
          <RightCategoryBlock>
            <Category active={router.pathname === '/about'}>
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </Category>
            <Category active={router.pathname === '/contribute'}>
              <Link href="/contribute">
                <a>기여하기</a>
              </Link>
            </Category>
            <Category
              onClick={() => setIsProgramOpen(!isProgramOpen)}
              active={router.pathname === '/session'}
              aria-expanded={isProgramOpen}>
              <a href="#">
                <span>{isProgramOpen ? '프로그램▴' : '프로그램▾'}</span>
              </a>
              {isProgramOpen && (
                <SupportToggle>
                  <SupportCategory active={router.pathname === '/session'}>
                    <Link href="/session">
                      <a>발표 시간표</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory active={router.pathname === '/session/list'}>
                    <Link href="/session/list">
                      <a>발표 목록</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory
                    active={router.pathname === '/session/speech-to-text'}>
                    <Link href="/session/speech-to-text">
                      <a>문자통역 안내</a>
                    </Link>
                  </SupportCategory>
                </SupportToggle>
              )}
            </Category>
            <Category
              onClick={() => setNavSupport(!navSupport)}
              aria-expanded={navSupport}>
              <a href="#">
                <span>{navSupport ? '후원하기▴' : '후원하기▾'}</span>
              </a>
              {navSupport && (
                <SupportToggle>
                  <SupportCategory active={router.pathname === '/sponsors'}>
                    <Link href="/sponsors">
                      <a>후원사</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory active={router.pathname === '/patron'}>
                    <Link href="/patron">
                      <a>개인후원</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory active={router.pathname === '/support'}>
                    <Link href="/support">
                      <a>후원사 모집</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory active={router.pathname === '/supportjoin'}>
                    <Link href="/supportjoin">
                      <a>후원사로 참여하기</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory active={router.pathname === '/supportvalue'}>
                    <Link href="/supportvalue">
                      <a>후원사의 가치</a>
                    </Link>
                  </SupportCategory>
                  <SupportCategory
                    active={router.pathname === '/supportbenefits'}>
                    <Link href="/supportbenefits">
                      <a>후원사 혜택 안내</a>
                    </Link>
                  </SupportCategory>
                </SupportToggle>
              )}
            </Category>
            <Category active={router.pathname === '/coc'}>
              <Link href="/coc">
                <a>행동 강령</a>
              </Link>
            </Category>
          </RightCategoryBlock>
        </HeaderContents>
      </div>
    </Positionier>
  ) : (
    <MobileHeader />
  );
}

export default Header;
