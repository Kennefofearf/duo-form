import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <form>
      <label>
        First Name:
        <input type='text' firstName="firstName" />
      </label>
      <label>
        Last Name:
        <input type='text' lastName="lastName" />
      </label>
      <label>
        Employee ID Number:
        <input type='number' phoneNumber="phoneNumber" />
      </label>
      <label>
        Phone Number - DUO:
        <input type='number' phoneNumber="phoneNumber" />
      </label>
      <input type='submit' value="Submit" />
    </form>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
