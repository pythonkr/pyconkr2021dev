import React from 'react';
import styled from '@emotion/styled';
import { GreyEllipse, YellowEllipse } from '../../pages/patron';
import { Category, Session } from '../../types/session';

interface CategoryListProps {
    categoryList: Category[];
}

const CategoryBlock = styled.ul`
    & + & {
        margin-top: 4rem;
    }
`;
const CategoryTitle = styled.h3`
    font-size: 2rem;
    color: #f5df4d;
    position: relative;
`;
const SessionLink = styled.a`
    display: inline-block;
`;
const SessionItem = styled.div`
    font-size: 1.5rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    flex-direction: row;
`;
const PersonBlock = styled.div`
    margin-left: 2rem;
    flex: 1;
`;
const Speaker = styled.div`
    font-weight: bold;
`;
const Title = styled.div`
    margin-top: 0.4rem;
`;
const YellowImage = styled(YellowEllipse)`
    width: 6rem;
    height: 6rem;
`;
const GreyImage = styled(GreyEllipse)`
    width: 6rem;
    height: 6rem;
`;

const CategoryList: React.FC<CategoryListProps> = ({ categoryList }) => {
    return (
        <>
            {categoryList.map((category: Category, index: number) => (
                <CategoryBlock key={`category-${index}`}>
                    <li>
                        <CategoryTitle>{category.category_name}</CategoryTitle>
                        <ul>
                            {category.category_items.map((session: Session, index: number) => (
                                <li key={session.id}>
                                    <SessionLink href={`/session/${session.id}`}>
                                        <SessionItem>
                                            {index % 2 === 0 ? <YellowImage /> : <GreyImage />}
                                            <PersonBlock>
                                                <Speaker>{session.user_name}</Speaker>
                                                <Title>{session.title}</Title>
                                            </PersonBlock>
                                        </SessionItem>
                                    </SessionLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                </CategoryBlock>
            ))}
        </>
    );
};

export default CategoryList;
