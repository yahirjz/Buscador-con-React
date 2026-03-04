import React from 'react'; 
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <BrowserRouter>
        <AppRoutes />
        
    </BrowserRouter>
);
