import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app.js';
import Sobre from './sobre.js';
import Header from './components/header.js';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { AnimatedSwitch } from 'react-router-transition';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<AnimatedSwitch
	      	atEnter={{ offset: -100 }}
      		atLeave={{ offset: -100 }}
      		atActive={{ offset: 0 }}
      		className="switch-wrapper"
	    	mapStyles={(styles) => ({
        		transform: `translateY(${styles.offset}%)`,
      		})}
      	>
			<Route path="/" exact={true} component={App} />
			<Route path="/sobre" component={Sobre} />
		</AnimatedSwitch>		
	</ BrowserRouter>
	,document.getElementById('root'));
