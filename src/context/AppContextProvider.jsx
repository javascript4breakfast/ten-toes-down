import React from 'react';
import { AppContext } from './AppContext';

const getCookieFromStorage = () => {
  if (!window.localStorage) return false;
  
  const cookie = localStorage.getItem('js4bCookie');

  return cookie ? true : false;
}

export default function AppContextProvider(props) {
  const [state, setState] = React.useState({
    colorScheme: 'light',
    scale: 'large',
    hasAgreed: getCookieFromStorage(),
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}