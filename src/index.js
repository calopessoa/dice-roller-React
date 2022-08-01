import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Provider from './context/Provider';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CharProvider from './context/CharProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider>
    <CharProvider>
      <App />
    </CharProvider>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
