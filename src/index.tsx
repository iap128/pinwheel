import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StationProvider from './StationContext';
import { ConfigProvider, theme } from 'antd';
import '@fontsource-variable/roboto-mono';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StationProvider>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: 'Roboto Mono Variable, sans-serif',
        },
        components: {
          Layout: {
            headerBg: '#28282A',
          }
        }
      }}>
        <App />
      </ConfigProvider>
    </StationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
