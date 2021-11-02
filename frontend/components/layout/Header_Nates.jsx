import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { LinkText } from '..';
import logoSrc from 'public/assets/logos/shophopper-logo.svg';

export const Header_Nates = () => {
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    const [session, loading] = useSession();

    let left = (
        <div>
            <Link href="/">
                <LogoWrapper>
                    <Image src={logoSrc} width={200} height={100} />
                </LogoWrapper>
            </Link>
        </div>
    );

    let right = null;

    if (loading) {
        left = (
            <div>
                <Link href="/">
                    <LogoWrapper>
                        <Image src={logoSrc} width={200} height={100} />
                    </LogoWrapper>
                </Link>
            </div>
        );

        right = (
            <Right>
                <p>Validating session ...</p>
            </Right>
        );
    }

    if (!session) {
        right = (
            <Right>
                <Link href="/api/auth/signin">
                    <a data-active={isActive('/signup')}>Log in</a>
                </Link>
            </Right>
        );
    }

    if (session) {
        left = (
            <div>
                <Link href="/">
                    <LogoWrapper>
                        <Image src={logoSrc} width={200} height={100} />
                    </LogoWrapper>
                </Link>
            </div>
        );

        right = (
            <Right>
                <Row>
                    <LinkText title={'Featured'} accent="" />
                    <LinkText title={'Review'} accent="" />
                    <LinkText title={'Manager'} accent="" />
                </Row>
                <Row>
                    <User>
                        {session.user.name} ({session.user.email})
                    </User>
                </Row>
            </Right>
        );
    }

    return (
        <Nav>
            {left}
            {right}
        </Nav>
    );
};

const User = styled.p`
    @media (max-width: 700px) {
        display: none;
    }
`;
const Nav = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    background: white;
    @media (max-width: 1000px) {
        margin-left: 40px;
    }
`;
const LogoWrapper = styled.div`
    height: 5rem;
    cursor: pointer;
    @media (max-width: 700px) {
        display: none;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-end;
    }
`;
const Right = styled.div`
    margin-left: auto;
`;