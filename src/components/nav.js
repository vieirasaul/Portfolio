import React from 'react';
import styles from './nav.module.scss';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  	render() {
    	return (
    		<nav>
    			<ul>
                    <li><NavLink exact to ="/" activeClassName={styles.active_link}>Início</NavLink></li>
    				<li><NavLink to ="/sobre" activeClassName={styles.active_link}>Sobre</NavLink></li>
    				<li><NavLink to ="/portfolio" activeClassName={styles.active_link}>Portfolio</NavLink></li>
    				<li><NavLink to ="/experiencia" activeClassName={styles.active_link}>Experiência</NavLink></li>
    				<li><NavLink to ="/habilidades" activeClassName={styles.active_link}>Habilidades</NavLink></li>
    				<li><NavLink to ="/contato" activeClassName={styles.active_link}>Contato</NavLink></li>
				</ul>
    		</nav>
		);
	}
}

export default Nav;