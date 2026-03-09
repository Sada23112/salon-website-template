import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('[v0] Mounting React App');
const root = document.getElementById('root');
console.log('[v0] Root element found:', root);

createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log('[v0] App rendered successfully');
