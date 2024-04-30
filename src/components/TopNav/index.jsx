import React from 'react';
import { ActionButton } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';
import { AppContext } from '../../context/AppContext';
import { TbDeviceDesktop, TbDeviceMobile, TbSunLow, TbMoonStars, TbArrowBigLeft, } from 'react-icons/tb';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    .theme-btns {
        display: flex;
    }
    .theme-btn:last-child {
        margin-left: 16px;
    }
    .icon-btn-wrapper {
        display: flex;
        padding: 4px;
    }
    .icon {
        margin-bottom: -0.111rem;
    }
`;

export default function TopNav(props) {
    const [state] = React.useContext(AppContext);
    const navigate = useNavigate();
    const { toggleTheme, toggleScale } = useTheme();

    return (
        <NavbarContainer>
            <div className='nav-btn'>
                <div>
                    <ActionButton onPress={() => navigate('/')}>
                        <div className='icon-btn-wrapper'>
                            <TbArrowBigLeft className='icon' />
                        </div>
                    </ActionButton>
                </div>      
            </div>

            <div className='theme-btns'>
                <div className='theme-btn'>
                    <ActionButton onPress={toggleScale}>
                        {state.scale === 'large' ? (<TbDeviceDesktop />) : (<TbDeviceMobile />)}
                    </ActionButton>
                </div>
            
                <div className='theme-btn'>
                    <ActionButton onPress={toggleTheme}>
                        {state.colorScheme === 'dark' ? (<TbMoonStars />) : (<TbSunLow />)}
                    </ActionButton>
                </div>
            </div>

           
        </NavbarContainer>
    );
}