import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { signOut } from 'next-auth/client';
import styled from 'styled-components';
import { TableDeleteRow } from '@styled-icons/fluentui-system-regular/TableDeleteRow';
import { BoxArrowUpLeft } from '@styled-icons/bootstrap/BoxArrowUpLeft';
// import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
// import { Create } from '@styled-icons/ionicons-sharp/Create';
import hydrateRequest from "requests/hydrateRequest";

import { font, sizes, color, mixin, zIndexValues } from 'styles/theme';

const NavbarLeft = () => {
    // const [ loading, setLoading ] = useState(false || "");

    const _wipeDatabase = async () => {
        await hydrateRequest({ request: 'DESTROY' });
    };

    return (
        <NavLeft>
            {/* <Link href="/manager">
            <>
                <MagnifyingGlass size={30} />
                <ItemText>Search Shops</ItemText>
            </>
        </Link>

        <Link href="/manager">
            <>
                <Create size={30} />
                <ItemText>Create New Store</ItemText>
            </>
        </Link> */}

            <Bottom>
                <LogOutIcon onClick={() => signOut()}>
                    <BoxArrowUpLeft color="white" />
                </LogOutIcon>
                <DeleteDb onClick={_wipeDatabase}>
                    <TableDeleteRow color="red" />
                </DeleteDb>
            </Bottom>
        </NavLeft>
    );
};

const LogOutIcon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1rem;
    cursor: pointer;
`;

const DeleteDb = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1rem;
    margin-top: 1.5rem;
    cursor: pointer;
`;

export const NavLeft = styled.aside`
    z-index: ${ zIndexValues.navLeft };
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    height: 100vh;
    width: ${ sizes.appNavBarLeftWidth }px;
    background: ${ color.backgroundDarkPrimary };
    transition: all 0.1s;
    ${ mixin.hardwareAccelerate }
    &:hover {
        width: 200px;
        box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
    }
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    // height: 42px;
    line-height: 42px;
    padding-left: 64px;
    color: #deebff;
    transition: color 0.1s;
    ${ mixin.clickable }
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    i {
        position: absolute;
        left: 18px;
    }
`;

export const ItemText = styled.div`
    position: relative;
    right: 12px;
    visibility: hidden;
    opacity: 0;
    text-transform: uppercase;
    transition: all 0.1s;
    transition-property: right, visibility, opacity;
    ${ font.bold }
    ${ font.size(12) }
    ${ NavLeft }:hover & {
        right: 0;
        visibility: visible;
        opacity: 1;
    }
`;

export default NavbarLeft;