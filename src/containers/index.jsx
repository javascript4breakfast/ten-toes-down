import React from 'react';
import { createBrowserRouter, useParams } from 'react-router-dom';
import LandingPage from './Landing';
import ResumePage from './Resume';
import PlaybackPage from './Playback';
import BlogPage from './BlogPage';
import Blog from './Blog';

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
    {
        element: <Blog />,
        path: "/blogs/:slug",
    }
]);

export default routes;