import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta name="description" content="בית דין צדק חדש בנהולו של הגאון הגדול רבי עמרם פריד, בית דין לעניני ממונות בפתח תקווה, רחוב הבנים 30 פ
        ת" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="בית דין, פתח תקווה, דיני ממונות , רבי עמרם פריד, רבי שמואל כהן" />
      <title>בית דין פ"ת</title>
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
