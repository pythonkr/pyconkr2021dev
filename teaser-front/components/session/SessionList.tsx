import React from 'react';
import { Session } from '../../types/session';
import styled from '@emotion/styled';
import CategoryList from './CategoryList';

interface SessionListProps {
    sessionList: Session[];
}

const SessionListContainer = styled.div`
    margin: 6rem 8rem;
    font-size: 1.75rem;
    line-height: 1;
    @media (max-width: 768px) {
        margin: 0;
        padding: 2rem;
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

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
