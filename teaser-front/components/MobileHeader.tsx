import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ROUTES } from '../types/enums';
import Link from 'next/link';

const MenuButton = styled.button`
    position: fixed;
    z-index: 999;
    top: 25px;
    right: 25px;
    margin: 0;
    width: 100px;
    height: 100px;
    background-color: inherit;
    border: 2px solid #939597;
    border-radius: 50%;
`;

const MenuImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    color: #fdda24;
`;

const RouteContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 20%;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    z-index: 999;
`;
const RouteList = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 10rem;
`;
const RouteItem = styled.li`
    margin: 0;
    padding: 0;
    display: block;
    font-size: 2.5rem;
    padding: 1rem 1.5rem;
    text-align: right;
    a {
        display: block;
        padding: 1rem 1.5rem;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    padding: 2rem;
    font-size: 2.5rem;
    color: #fff;
    border: 0;
    background-color: inherit;
`;

const PyconTextLogo = styled.div`
    padding: 3rem;
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
    a {
        display: inline-block;
    }
    h1 {
        font-size: inherit;
    }
`;

const MobileHeader = () => {
    const routes = ROUTES;
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <>
            <PyconTextLogo>
                <Link href="/">
                    <a>
                        <h1>PYCON.KR 2021</h1>
                    </a>
                </Link>
            </PyconTextLogo>
            {!isMenuOpened ? (
                <MenuButton onClick={() => setIsMenuOpened(true)}>
                    <MenuImage src="https://pyconkr-2021.s3.ap-northeast-2.amazonaws.com/img/profile_wht.png" />
                </MenuButton>
            ) : (
                <RouteContainer>
                    <CloseButton onClick={() => setIsMenuOpened(false)}>
                        X
                    </CloseButton>
                    <RouteList>
                        {routes.map((route, index) => (
                            <RouteItem key={index}>
                                <a href={route.path}>{route.name}</a>
                            </RouteItem>
                        ))}
                    </RouteList>
                </RouteContainer>
            )}
        </>
    );
};

export default MobileHeader;
