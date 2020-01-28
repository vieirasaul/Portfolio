import React from 'react';
import ReactDOM from 'react-dom';
import styles from './nav.module.scss';

class Nav extends React.Component {
  	render() {
    	return (
    		<nav>
    			<ul>
                    <li className={styles.active_link}><a href="">Início</a></li>
    				<li><a href="">Sobre</a></li>
    				<li><a href="">Portfolio</a></li>
    				<li><a href="">Experiência</a></li>
    				<li><a href="">Habilidades</a></li>
    				<li><a href="">Contato</a></li>
				</ul>
    		</nav>
		);
	}
}

export default Nav;