import React from 'react';
import styled from '@emotion/styled';
import { Shortcut } from '../../types/shortcut';
import { SHORTCUT_LINK } from '../../types/enums';

const ShortcutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ShortcutLink = styled.a`
    display: block;
    word-break: keep-all;
    padding: 1.5rem 4rem;
    margin: 0 2rem;
    background-color: #f5df4d;
    color: #000;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 4rem;
    cursor: pointer;

    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`;

const ShortcutComponent: React.FC = () => {
    const shortcutList = SHORTCUT_LINK;
    return (
        <ShortcutContainer>
            {shortcutList.map((item: Shortcut, index) => {
                return (
                    <ShortcutLink href={item.url} key={index}>
                        {item.name}
                    </ShortcutLink>
                );
            })}
        </ShortcutContainer>
    );
};

export default ShortcutComponent;
