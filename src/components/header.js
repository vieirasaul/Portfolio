import React from 'react';
import ReactDOM from 'react-dom';
import styles from './header.module.scss';
import Nav from './nav.js';
import SocialMedia from './social-media.js';

class Header extends React.Component {
  	render() {
    	return (
    		<header>
				<a href="" className={styles.logo}><img src={ window.location.origin + "/img/logo.png" } /></a>   			
    			<Nav />
    			<SocialMedia />
    		</header>
		);
	}
}

export default Header;