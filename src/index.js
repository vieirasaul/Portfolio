import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app.js';
import Sobre from './Pages/Sobre/Sobre.js';
import Experiencia from './Pages/Experiencia/Experiencia.js';
import Header from './Components/Header/Header.js';
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
			{/* <Route path="/portfolio" component={Portfolio} /> */}
			<Route path="/experiencia" component={Experiencia} />
			{/* <Route path="/habilidades" component={Habilidades} />
			<Route path="/contato" component={Contato} /> */}
		</AnimatedSwitch>		
	</ BrowserRouter>
	,document.getElementById('root'));
