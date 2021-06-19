import Link from 'next/link';
import styled from '@emotion/styled';


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
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
`;

const BlackBackground = styled.div`
    background: black;
    display: flex;
    height: auto;
    
    align-items: center;
`;

const HeaderContents = styled.div`
    width: 1280px;
    display: flex;
    
    flex-direction: row;
    align-items: center;

    padding-right: 3rem;
    padding-left: 1rem;
`;

const Category = styled.div`
    font-size: 1.25rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 3rem;
    text-align: center;
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

function Header () {
    return(
        <Positionier>
            <BlackBackground>
                <HeaderContents>
                    <Category>
                        <Link href="/">
                            <a>PYCON KR 2021</a>
                        </Link>
                    </Category>
                    <Spacer />
                    {categories.map(category => (
                        <Category key={category.name}>
                            <Link href={`/${category.name}`}>
                                <a>{category.text}</a>
                                </Link>
                        </Category>
                    ))}
                </HeaderContents>
            </BlackBackground>
        </Positionier>
    );
}

export default Header;