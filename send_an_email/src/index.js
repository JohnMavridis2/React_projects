import ReactDOM from 'react-dom/client';
import React from 'react';
import App from "./App"
import './index.css';
import emailjs from '@emailjs/browser';

emailjs.init('Jrwyn2aCqqda46EhW');

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(element);


