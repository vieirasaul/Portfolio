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
	      	atEnter={{ 
				opacity: 0,
				scale: 0,
			}}
      		atLeave={{ 
				opacity: 0,
				scale: 0,
			}}
      		atActive={{ 
				opacity: 1,
				scale: 1,
			}}
      		className="switch-wrapper"
	    	mapStyles={(styles) => ({
				opacity: styles.opacity,
				transform: `scale(${styles.scale})`,
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
