import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import BentoBox from './BentoBox';
import CookieAgreement from './CookieAgreement';
import NavigationWidget from './NavigationWidget';
import LandingPageDescription from './LandingPageDescription';
import GlobalFooter from '../../components/GlobalFooter';

const LandingPageGrid = styled.div``;

const LandingPageWrapper = styled.div`
    display: grid;
`;

const LowerLandingPageGrid = styled.div`
    display: grid;
`;

export default function LandingPage() {
    return (
        <LandingPageWrapper>
            <NavigationWidget />
            <CookieAgreement />
            <LandingPageGrid>
                <Banner />
                <LandingPageDescription />
            </LandingPageGrid>
            <LowerLandingPageGrid>
                <BentoBox />
                <GlobalFooter />
            </LowerLandingPageGrid>
        </LandingPageWrapper>
    );
}