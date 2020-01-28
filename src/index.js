import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</ BrowserRouter>
	,document.getElementById('root'));
