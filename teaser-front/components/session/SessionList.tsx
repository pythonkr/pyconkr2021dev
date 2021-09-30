import React from 'react';
import { Session } from '../../types/session';
import styled from '@emotion/styled';
import { GreyEllipse, YellowEllipse } from '../../pages/patron';

interface SessionListProps {
    sessionList: Session[];
}

interface Category {
    category_id: number;
    category_name: string;
    category_items: Session[];
}
interface CategoryListProps {
    categoryList: Category[];
}

const SessionListContainer = styled.div`
    margin: 6rem 8rem;
    font-size: 1.75rem;
    line-height: 1;
    @media (max-width: 768px) {
        margin: 0;
        padding: 0 2rem;
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;
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
    return categoryList.map((category: Category, index: number) => (
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
    ));
};

const SessionList: React.FC<SessionListProps> = ({ sessionList }) => {
    let categoryGroupObject: any = {};
    sessionList.forEach((session: Session) => {
        const categoryId = session.category_data.id;
        let category = categoryGroupObject[categoryId];
        if (!category) {
            category = {
                category_id: categoryId,
                category_name: session.category_data.name,
                category_items: []
            };
            categoryGroupObject[categoryId] = category;
        }
        category.category_items.push(session);
    });

    const categoryList = Object.keys(categoryGroupObject).map((item) => categoryGroupObject[item]);

    return (
        <SessionListContainer>
            <CategoryList categoryList={categoryList} />
        </SessionListContainer>
    );
};

export default SessionList;
