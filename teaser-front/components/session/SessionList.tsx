import React from 'react';
import { Session } from '../../types/session';
import styled from '@emotion/styled';
import CategoryList from './CategoryList';

interface SessionListProps {
    sessionList: Session[];
}

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

    return <CategoryList categoryList={categoryList} />;
};

export default SessionList;
