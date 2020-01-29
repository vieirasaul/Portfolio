import React from 'react';
import styles from './Header.module.scss';
import Nav from '../Nav/Nav.js';
import SocialMedia from '../SocialMedia/Social-media.js';
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