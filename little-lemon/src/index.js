import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <head>
        <meta name="description" content="Little Lemon Restaurant is the family owned Mediterranean restaurant, focused on the tradional recipes with a modern twist."/>
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:description" content="Little Lemon Restaurant is the family owned Mediterranean restaurant, focused on the tradional recipes with a modern twist."/>
        <meta name="og:image" content="https://www.48hourslogo.com/oss/works/2022/01/12/135536140395/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg"/>
      </head>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
