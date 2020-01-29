import React from 'react';
import styles from './Saiba-mais.module.scss';
import { Link } from 'react-router-dom';

class SaibaMais extends React.Component {
  	render() {
    	return (
            <Link to ="/sobre" className={styles.webdoor_button}>Saiba Mais</Link>   	
		);
	}
}

export default SaibaMais;