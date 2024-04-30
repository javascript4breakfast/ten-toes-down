import React from 'react';
import { defaultTheme, Provider as SpectrumProvider } from '@adobe/react-spectrum';
import { RouterProvider } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import './App.css'
import routes from './containers';

export default function App() {
  const [state] = React.useContext(AppContext);
  return (
    <SpectrumProvider colorScheme={state.colorScheme} scale={state.scale} theme={defaultTheme}>
      <RouterProvider router={routes} />
    </SpectrumProvider>
  );
}