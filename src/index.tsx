import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import router from './Routes/Routerss';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


