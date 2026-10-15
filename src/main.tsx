import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Presentation from './Presentation';
import './styles.css';

const Page = window.location.pathname === '/sunum' ? Presentation : App;
createRoot(document.getElementById('root')!).render(<React.StrictMode><Page /></React.StrictMode>);
