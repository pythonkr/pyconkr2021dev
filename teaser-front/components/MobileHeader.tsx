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
    background-color: #121212;
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
    overflow-y: scroll;
`;
const RouteList = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 2rem;
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
    left: 0;
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

const DropDownRouteGroup = styled.div``;
const DropDownOpenButton = styled.button`
    display: block;
    font-size: 2.5rem;
    padding: 1rem 1.5rem;
    text-align: right;
    border: 0;
    width: 100%;
    background-color: inherit;
    color: #fff;
`;
const DropDownRouteItem = styled(RouteItem)`
    font-size: 1.8rem;
    padding: 0;
    a {
        padding: 1rem;
    }
`;
const NavIcon = styled.span`
    font-size: 1.8rem;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.6rem;
`;

interface RouteType {
    name: string;
    path?: string;
}
interface RouteListType {
    name: string;
    routeType: string;
    routeGroup?: RouteType[];
    path?: string;
}

interface DropDownRouteComponentProps {
    buttonName: string;
    routes?: RouteType[];
}

const DropDownRouteComponent: React.FC<DropDownRouteComponentProps> = ({ buttonName, routes = [] }) => {
    const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

    const handleClick = () => {
        setIsSubMenuOpened(!isSubMenuOpened);
    };

    return (
        <DropDownRouteGroup>
            <DropDownOpenButton onClick={handleClick} aria-expanded={isSubMenuOpened}>
                <a href="#">
                    {buttonName}
                    <NavIcon>{isSubMenuOpened ? '▾' : '▴'}</NavIcon>
                </a>
            </DropDownOpenButton>
            {isSubMenuOpened &&
                routes.map((subRoute: RouteType, index: number) => (
                    <DropDownRouteItem key={index}>
                        <a href={subRoute.path}>{subRoute.name}</a>
                    </DropDownRouteItem>
                ))}
        </DropDownRouteGroup>
    );
};

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
                    <CloseButton onClick={() => setIsMenuOpened(false)}>X</CloseButton>
                    <RouteList>
                        {routes.map((route: RouteListType, index: number) => {
                            return (
                                <RouteItem key={index}>
                                    {route.routeType === 'single' ? (
                                        <a href={route.path}>{route.name}</a>
                                    ) : (
                                        <DropDownRouteComponent buttonName={route.name} routes={route.routeGroup} />
                                    )}
                                </RouteItem>
                            );
                        })}
                    </RouteList>
                </RouteContainer>
            )}
        </>
    );
};

export default MobileHeader;
