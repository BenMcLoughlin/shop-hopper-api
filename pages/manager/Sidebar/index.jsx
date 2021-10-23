/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Web } from '@styled-icons/material/Web';
import { Shopify } from '@styled-icons/fa-brands/Shopify';
import { BuildingBankLink } from '@styled-icons/fluentui-system-regular/BuildingBankLink';
import styled, { css } from 'styled-components';
import * as shopsLists from 'mock/shopsLists';

import { camelCase, startCase } from 'utils/strings';
import useGlobal from 'globalState/store';
import addShops from "requests/addShops";
import fetchShops from "requests/fetchShops";
import fetchShopStatus from "requests/fetchShopStatus";
import logoSrc from 'public/assets/logos/shophopper-logo.svg';
import { color, sizes, font, mixin, zIndexValues } from 'styles/theme';

const ManagerSidebar = () => { 
    const router = useRouter();
    const [ globalState, globalActions ] = useGlobal();
    const [ list, setList ] = useState([]);
    const [ statuses, setStatuses ] = useState({});
    const [ addShopModal, toggleAddShopModal ] = useState(false);
    const [ loading, setLoading ] = useState(false || "");

    const city = 'kelowna';
    const shopsList = shopsLists[city];
    const siteHostList = [ ...new Set(shopsList.map((d) => d.site_host)) ].filter((d) => d);
    
    useEffect(() => {
        globalActions.siteHosts.setList(siteHostList);
    }, [ ]);

    useEffect(() => {
        const _getShopStatus = async () => {
            setLoading(true);
            const eachShop = await fetchShopStatus();

            let businessStatus = {};

            if (eachShop) {
                eachShop.map((d) => (
                    businessStatus[d.business_name] = {
                        products: d.products,
                        updatedAt: d.updated_at
                    }
                ));

                setStatuses(businessStatus);
                setLoading(false);
            }
        };

        _getShopStatus();
    }, [ globalState.status ]);

    useEffect(() => {
        const _getShopList = async () => {
            setLoading(true);
            const uniqueShops = await fetchShops();
            globalActions.shops.addShops(uniqueShops);

            if (uniqueShops) {
                const businessNames = uniqueShops.map((d) => d.business_name);

                setList(businessNames);
                setLoading(false);
            }
        };

        _getShopList();
    }, [ addShopModal ]);

    const renderLinkItem = (text, iconType, path) => {
        let Icon = iconType;

        return (
            <Link href={`/manager/${ path }`}>
                <LinkItem isSelected={router.asPath.includes(path)}>
                    <>
                        <Icon size={30} />
                        <LinkText>{text}</LinkText>
                    </>
                </LinkItem>
            </Link>
        );
    };

    return (
        <SidebarWrapper>
            <Info>
                <Link href="/">
                    <Logo>
                        <Image src={logoSrc} width={200} height={100} />
                    </Logo>
                </Link>
            </Info>
            <Header>
                <BuildingBankLink size={30} />
                <p>SiteHosts</p>
            </Header>
            <Divider />
            <ul className="list">
                {siteHostList.map((siteHost) => (
                    renderLinkItem(startCase(siteHost), Shopify, `${ siteHost.toLowerCase() }`)
                ))}
            </ul>
            <Divider />
            {renderLinkItem('Etc...', Web, 'etc')}
            <Divider />
            {renderLinkItem('Etc...', Web, 'etc')}
            <Divider />
            {renderLinkItem('Etc...', Web, 'etc')}
            <Divider />
            {renderLinkItem('Etc...', Web, 'etc')}
            <Divider />
        </SidebarWrapper>
    );
};

export const SidebarWrapper = styled.div`
    position: fixed;
    z-index: ${ zIndexValues.navLeft - 1 };
    top: 0;
    left: ${ sizes.appNavBarLeftWidth }px;
    height: 100vh;
    width: ${ sizes.secondarySideBarWidth }px;
    padding: 0 16px 24px;
    background: ${ color.backgroundLightest };
    border-right: 1px solid ${ color.borderLightest };
    ${ mixin.scrollableY }
    ${ mixin.customScrollbar() }
    @media (max-width: 1100px) {
        width: ${ sizes.secondarySideBarWidth - 10 }px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    padding: 8px 12px;
    border-radius: 3px;
    font-size: 1.2rem;
    font-weight: bold;
    p {
        margin-left: 10px;
    }
`;

export const Time = styled.div`
    font-size: .8rem;
`;

export const Update = styled.span`
    font-size: .8rem;
    color: green;
`;

export const Row = styled.div`
    display: flex;
    justify-content: start;
    // flex-direction: row;
    text-align: right;
    min-height: 17rem;
    width: 100%;
    gap: 2rem;
`;

export const UpdateColumn = styled.div`
    display: flex;            
    flex-direction: column;
    justify-content: left;
    align-items: center;
    justify-content: space-between;
    background-color: #e7e7e7a6;
    padding: .2rem;
    width: 100%;
`;

export const Logo = styled.div`
    height: 5rem;
    cursor: pointer;
`;

export const Info = styled.div`
    display: flex;
    padding: 24px 4px;
`;

export const Texts = styled.div`
    padding: 3px 0 0 10px;
`;

export const Name = styled.div`
    color: ${ color.textDark };
    ${ font.size(15) };
    ${ font.medium };
`;

export const Category = styled.div`
    color: ${ color.textMedium };
    ${ font.size(13) };
`;

export const Divider = styled.div`
    margin-top: 17px;
    padding-top: 18px;
    border-top: 1px solid ${ color.borderLight };
`;

export const LinkItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    i {
        margin-right: 15px;
        font-size: 20px; 
    }
    ${ (props) => props.isSelected &&
    css`
        color: ${ color.primary };
        background: ${ color.backgroundLight };
        i {
        color: ${ color.primary };
        }
    ` }
`;

export const LinkText = styled.div`
    padding-top: 2px;
    margin-left: 15px;
    ${ font.size(14.7) };
`;

export default ManagerSidebar;