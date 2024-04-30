import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Landing';
import ResumePage from './Resume';
import PlaybackPage from './Playback';
    
const routes = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/resume',
        element: <ResumePage />,
    },
    {
        path: '/player',
        element: <PlaybackPage />,
    },
]);

export default routes;