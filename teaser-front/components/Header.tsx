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
    background-color: black;
`;

const HeaderContents = styled.div`
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media (min-width: 768px) and (max-width: 1280px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100vh;
        justify-content: center;
    }
`;

const RightCategoryBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const Category = styled.div<{active: boolean}>`
    font-size: 1.25rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 3rem;
    text-align: center;

    ${(props) => props.active && css`color: #F5DF4D;`
    }

    @media (min-width: 768px) and (max-width: 1280px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    @media (max-width: 768px) {
        font-size: 0.75rem;
        margin-left: 1.25rem;
        margin-right: 1.25rem;
    }
`;



function Header () {

    const router = useRouter();

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
                        {categories.map(category => (
                            <Category key={category.name} active={router.pathname === `/${category.name}`} >
                                <Link href={`/${category.name}`}>
                                    <a>{category.text}</a>
                                    </Link>
                            </Category>
                        ))}
                    </RightCategoryBlock>
                </HeaderContents>
            </div>
        </Positionier>
    );
}

export default Header;