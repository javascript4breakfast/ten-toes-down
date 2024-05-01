import React from 'react';
import styled from 'styled-components';
import {ActionButton} from '@adobe/react-spectrum';
import {
    TbMoonStars,
    TbDeviceDesktop,
    TbSunLow,
    TbDeviceMobile,
} from 'react-icons/tb';
import { AppContext } from '../../context/AppContext';
import useTheme from '../../hooks/useTheme';

const NavigationContainer = styled.nav`
    display: grid;
    grid-template-columns: 2rem 2rem auto;
    grid-gap: 1.333em;
    align-items: center;
    padding: 0.8em;
`;

export default function NavigationWidget() {
    const [state] = React.useContext(AppContext);
    const { toggleTheme, toggleScale } = useTheme();

    return (
        <NavigationContainer>
                <ActionButton
                    aria-label="Icon only"
                    onPress={toggleTheme}
                >
                    {state.colorScheme === 'dark' ? (<TbMoonStars />) : (<TbSunLow />)}
                </ActionButton>

                <ActionButton
                    aria-label="Icon only"
                    onPress={toggleScale}
                >
                    {state.scale === 'large' ? (<TbDeviceDesktop />) : (<TbDeviceMobile />)}
                </ActionButton>
        </NavigationContainer>
    );
}