import React from 'react';
import { AppContext } from '../context/AppContext';

const themeMap = {
    light: 'dark',
    dark: 'light',
    large: 'medium',
    medium: 'large',
}

export default function useTheme() {
    const [state, setState] = React.useContext(AppContext);

    const toggleTheme = () => {
        setState((prevState) => ({
            ...prevState,
            colorScheme: themeMap[state.colorScheme],
        }));
    };

    const toggleScale = () => {
        setState((prevState) => ({
            ...prevState,
            scale: themeMap[state.scale],
        }));
    }

    return {
        toggleTheme,
        toggleScale,
    }
}