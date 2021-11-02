/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'frontend/components';
import women from 'public/assets/landing/shutterstock/twoWomen.png';
import paint1 from 'public/assets/landing/paintBlobs/hero-bg-3.png';
import Image from 'next/image';
import { font, color } from 'frontend/styles/theme.js';

export const Welcome = ({ title, subTitle }) => (
    <Wrapper>
        <Left>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <ButtonWrapper>
                <Button title={'Sign up'} href="/auth/signup" />
            </ButtonWrapper>
        </Left>
        <Right>
            <Blotch1>
                <Image src={paint1} width={1000} height={700} />
            </Blotch1>
            <ImageWrapper>
                <Image src={women} width={1000} height={1200} />
            </ImageWrapper>
        </Right>
    </Wrapper>
);

export default Welcome;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    position: relative;
    font-family: ${font.catchy};
    font-size: 8rem;
    line-height: 14rem;
    width: 90%;
    height: 80rem;
    @media (max-width: 600px) {
        height: 60rem;
        font-size: 5rem;
        line-height: 9rem;
        width: 70%;
    }
`;

const Title = styled.h1`
<<<<<<< HEAD:components/landing/Welcome.jsx
    color: ${ color.textDarkest };
=======
    color: ${color.text.darkest};
>>>>>>> 487fb9e3d14e04f034a18360fe21c10bd1ede6d9:frontend/components/pages/landing/Welcome.jsx
    font-weight: bold;
    text-transform: uppercase;
`;
const SubTitle = styled.h2`
    line-height: 3rem;
    font-size: 2rem;
    margin-top: 1rem;
    margin-left: 2rem;
    font-weight: 400;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    @media (max-width: 700px) {
        position: absolute;
        width: 100%;
    }
`;
const Right = styled.div`
    width: 45%;
    position: relative;
    @media (max-width: 700px) {
        position: absolute;
        width: 100%;
        opacity: 0.2;
        right: 0%;
    }
    z-index: 0;
`;
const ImageWrapper = styled.div`
    position: absolute;
    top: -5rem;
    right: ${(p) => (p.visible ? '2rem' : '-5rem')};
    width: 75rem;
    transition: all 0.4s ease;
    @media (max-width: 600px) {
        right: -10%;
        top: 0;
        width: 45rem;
    }
`;
const Blotch1 = styled.div`
    position: absolute;
    top: 20%;
    right: 0%;
    width: 65rem;
    @media (max-width: 600px) {
        right: 0%;
        width: 25rem;
    }
`;

const ButtonWrapper = styled.div`
    margin-top: 3rem;
    margin-left: 3rem;
    z-index: 2;
`;