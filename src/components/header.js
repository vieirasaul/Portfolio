import React from 'react';
import styles from './header.module.scss';
import Nav from './nav.js';
import SocialMedia from './social-media.js';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  	render() {
    	return (
    		<header>
				<Link to ="/" className={styles.logo}><img src={ window.location.origin + "/img/logo.png" } alt="Logo do site" /></Link>   			
    			<Nav />
    			<SocialMedia />
    		</header>
		);
	}
}

export default Header;