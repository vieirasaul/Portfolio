import React from 'react';
import './Header.module.scss';
import Nav from '../Nav/Nav.js';

class Header extends React.Component {
  	render() {
    	return (
    		<header> 			
    			<Nav />
    		</header>
		);
	}
}

export default Header;