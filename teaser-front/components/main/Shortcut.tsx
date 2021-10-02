import React from 'react'
import styled from '@emotion/styled'
import { Shortcut } from '../../types/shortcut'
import { SHORTCUT_LINK, YOUTUBE_TRACK_LINK } from '../../types/enums'

const ShortcutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    
    @media(max-width: 768px) {
        flex-direction: column;
    }
`

const ShortcutLink = styled.a`
    display: block;
    padding: 1.5rem 4rem;
    margin: 0 2rem;
    background-color: #F5DF4D;
    color: #000;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 4rem;
    cursor: pointer;
    
    @media(max-width: 768px) {
        margin: 1rem 0;
    }
`

const ShortcutComponent: React.FC = () => {
    const shortcutList = SHORTCUT_LINK;
    const youtubeTackLinst = YOUTUBE_TRACK_LINK;

    return (
        <>
            <ShortcutContainer>
                {shortcutList.map((item: Shortcut, index) => {
                    return (
                        <ShortcutLink href={item.url} key={index}>{item.name}</ShortcutLink>
                    )
                })}
            </ShortcutContainer>

            <p></p>

            <ShortcutContainer>
                {youtubeTackLinst.map((item: Shortcut, index) => {
                    return (
                        <ShortcutLink href={item.url} key={index}>{item.name}</ShortcutLink>
                    )
                })}
            </ShortcutContainer>
        </>
    )
}

export default ShortcutComponent
