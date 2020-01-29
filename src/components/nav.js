import React from 'react';
import ReactDOM from 'react-dom';
import styles from './nav.module.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  	render() {
    	return (
    		<nav>
    			<ul>
                    <li className={styles.active_link}><Link to ="/">Início</Link></li>
    				<li><Link to ="/sobre">Sobre</Link></li>
    				<li><Link to ="/portfolio">Portfolio</Link></li>
    				<li><Link to ="/experiencia">Experiência</Link></li>
    				<li><Link to ="/habilidades">Habilidades</Link></li>
    				<li><Link to ="/contato">Contato</Link></li>
				</ul>
    		</nav>
		);
	}
}

export default Nav;