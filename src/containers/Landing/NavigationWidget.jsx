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
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    margin-top: 1em;
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


