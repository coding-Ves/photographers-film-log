import { CssBaseline } from '@mui/material';
import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './components/Router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <CssBaseline />
    </React.StrictMode>
);
