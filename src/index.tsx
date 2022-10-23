import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import MyTheme from './providers/theme/theme.provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyTheme>
      <App />
    </MyTheme>
  </React.StrictMode>
)
