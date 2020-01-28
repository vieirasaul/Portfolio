import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';

class Header extends React.Component {
  	render() {
    	return (
    		<header>
    			<h1>Portfolio</h1>
    			<Nav />
    		</header>
		);
	}
}

export default Header;