import React from 'react';
import { Badge } from '@adobe/react-spectrum'
// import { useSpringValue, useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';
import logo from '../../clientlibs/img/js4b.png'
import logoAlt from '../../clientlibs/img/js4b_alt.png';
import { AppContext } from '../../context/AppContext';

const ImageWrapper = styled.div`
    img {
        max-width: 3em;
    }
`;

const BannerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 1em;
    padding: 1.5em;
`;

function DynamicImage(props) {
    const [state] = React.useContext(AppContext);
    const logoMap = { 'dark': logoAlt, 'light': logo };

    return (
        <ImageWrapper>
            <img alt='logo' src={logoMap[state.colorScheme]} />
        </ImageWrapper>
    );
}

export default function Banner() {
    const [state] = React.useContext(AppContext);
    const isDark = state.colorScheme === 'dark';
    return (
        <BannerWrapper>
            <DynamicImage />
            <Badge variant={isDark ? 'negative' : 'info'}>
                javascript4breakfast
            </Badge>
        </BannerWrapper>
    );
}