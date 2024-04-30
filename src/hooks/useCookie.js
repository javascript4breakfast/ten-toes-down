import React from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

export default function useCookie() {
    const [, setState] = React.useContext(AppContext);

    const setCookie = () => {
        if (!window.localStorage) return;

        setState(prevState => ({
            ...prevState,
            hasAgreed: true,
        }));

        localStorage.setItem('js4bCookie', uuidv4());
    };

    return {
        setCookie,
    }
}