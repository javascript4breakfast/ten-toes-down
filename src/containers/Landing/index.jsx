import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';
import FeatureSection from './FeatureSection';
import NavigationWidget from './NavigationWidget';
import CookieAgreement from './CookieAgreement';
import GlobalFooter from '../../components/GlobalFooter';

import { LandingPageGridItem } from '../../styled';

const LandingPageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem 0.8rem;
`;

export default function LandingPage() {
    return (
        <LandingPageGrid>
            <LandingPageGridItem>
                <NavigationWidget />
            </LandingPageGridItem>
            <CookieAgreement />
            <Jumbotron />
            <FeatureSection />
            <LandingPageGridItem>
                <GlobalFooter />
            </LandingPageGridItem>
        </LandingPageGrid>
    );
}