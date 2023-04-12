import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyleProvider hashPriority="low">
    <App />
  </StyleProvider>,
);
