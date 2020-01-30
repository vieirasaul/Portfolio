import React from 'react';
import styles from './Header.module.scss';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';

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