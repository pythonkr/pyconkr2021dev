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
    justify-content: center;
    align-items: center;
    padding-right: 5rem;
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
            <div>
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
            </div>
        </Positionier>
    );
}

export default Header;