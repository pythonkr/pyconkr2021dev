import Link from 'next/link';
import styled from '@emotion/styled';
import {useState, useCallback} from 'react';
import { css } from '@emotion/react';
import {useRouter} from 'next/router';


type CategoriesType = CategoryType[]

type CategoryType = {
    name: string;
    text: string;
}

const categories:CategoriesType = [
    {
        name: 'about',
        text: 'ABOUT'
    },
    {
        name: 'contribute',
        text: '기여하기'
    },
    {
        name: 'support',
        text: '후원하기'
    },
    {
        name: 'coc',
        text: '행동강령'
    }
]



const Positionier = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 990;
    top: 0px;
    width: 100%;
    background-color: #121212;
`;

const HeaderContents = styled.div`
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media (min-width: 768px) and (max-width: 1280px) {
        width: 768px;
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
    max-width: 100%;
`;

const RightCategoryBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const Category = styled.div<{active?: boolean}>`
    font-size: 1.25rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 3rem;
    text-align: center;

    span {
        cursor: pointer;
    }

    ${(props) => props.active && css`color: #F5DF4D;`
    }

    @media (min-width: 768px) and (max-width: 1280px) {
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        font-size: 0.75rem;
        margin-left: 1.25rem;
        margin-right: 1.25rem;
    }
`;

const SupportCategory = styled(Category)`
    margin: 0;
    margin-top: 3rem;
`;



function Header () {

    const router = useRouter();
    const [navsupport, SetNavSupport] = useState<boolean>(false);

    const onToggle = () => SetNavSupport(!navsupport)

    return(
        <Positionier>
            <div>
                <HeaderContents>
                    <Category active={router.pathname === '/'}>
                        <Link href="/">
                            <a>PYCON KR 2021</a>
                        </Link>
                    </Category>

                    
                    
                    <RightCategoryBlock>
                        <Category active={router.pathname === `/about`}>
                            <Link href="/about">
                                <a>ABOUT</a>
                            </Link>
                        </Category>
                        <Category active={router.pathname === `/contribute`}>
                            <Link href="/contribute">
                                <a>기여하기</a>
                            </Link>
                        </Category>

                        <Category onClick={() => onToggle()}>
                            <span>{navsupport ? '후원하기▴' : '후원하기▾'}</span>
                            {navsupport && 
                                <SupportToggle>
                                    <SupportCategory active={router.pathname === `/support`}>
                                        <Link href="/support">
                                            <a>후원사 모집</a>
                                        </Link>
                                    </SupportCategory>
                                    <SupportCategory active={router.pathname === `/supportvalue`}>
                                        <Link href="/supportvalue">
                                            <a>후원사의 가치</a>
                                        </Link>
                                    </SupportCategory>
                                    <SupportCategory active={router.pathname === `/supportbenefits`}>
                                        <Link href="/supportbenefits">
                                            <a>후원사 혜택 안내</a>
                                        </Link>
                                    </SupportCategory>
                                </SupportToggle>
                            }
                            
                            
                        </Category>
                        <Category active={router.pathname === `/coc`}>
                            <Link href="/coc">
                                <a>행동강령</a>
                            </Link>
                        </Category>
                    </RightCategoryBlock>
                </HeaderContents>
            </div>
        </Positionier>
    );
}

export default Header;