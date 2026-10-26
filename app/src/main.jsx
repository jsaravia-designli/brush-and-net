import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@phosphor-icons/web/regular';
import '@phosphor-icons/web/fill';
import '@phosphor-icons/web/bold';
import './index.css';
import PoolApp from './PoolApp.jsx';

// Defaults match the prototype's demo props; the Prototype controls bar changes them at runtime.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PoolApp startScreen="today" language="en" countdown={3} role="single" repairs theme="light" />
  </StrictMode>,
);
