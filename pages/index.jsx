import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { landingProps } from '../frontend/content/landingProps';
import { HowItWorks, Testimonials, Callout, Welcome, WhoWeAre } from 'frontend/components/pages/landing';
import { useUser } from '@auth0/nextjs-auth0';

import { ScrollUp } from 'frontend/components';

export function getStaticProps(context) {
    return {
        props: landingProps
    };
}

const Landing = ({ welcome, whoWeAre, howItWorks, callout1, callout2, testimonials }) => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;

    if (user) {
        return (
            <div>
                Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
            </div>
        );
    }

    return <a href="/api/auth/login">Login</a>;
    // return (
    //     <Wrapper>
    //         <Welcome {...welcome} />
    //         <Callout {...callout1} />
    //         <HowItWorks {...howItWorks} />
    //         <WhoWeAre {...whoWeAre} />
    //         <Callout {...callout2} />
    //         <Testimonials {...testimonials} />
    //         <ScrollUp />
    //     </Wrapper>
    // );
};

Landing.propTypes = {
    welcome: PropTypes.object,
    whoWeAre: PropTypes.object,
    howItWorks: PropTypes.object,
    callout: PropTypes.object,
    testimonials: PropTypes.object,
    news: PropTypes.object,
    callout1: PropTypes.object,
    callout2: PropTypes.object
};

export default Landing;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`;
