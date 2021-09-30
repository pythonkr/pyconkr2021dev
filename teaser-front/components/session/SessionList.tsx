import React from 'react';
import { Session } from '../../types/session';

interface SessionListProps {
    sessionList: Session[];
}

interface CategoryListProps {
    category: string;
    list: Session[];
}

const CategoryList: React.FC<CategoryListProps> = ({ category, list }) => {
    return <h3>{category}</h3>;
};

const SessionList: React.FC<SessionListProps> = ({ sessionList }) => {
    return <div></div>;
};

export default SessionList;
