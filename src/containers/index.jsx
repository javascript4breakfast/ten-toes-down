import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Landing';
import ResumePage from './Resume';
import PlaybackPage from './Playback';
import BlogPage from './Blog';
    
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
    {
        path: '/blog',
        element: <BlogPage />,
    },
]);

export default routes;