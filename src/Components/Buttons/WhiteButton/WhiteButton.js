import React from 'react';
import styles from './WhiteButton.module.scss';
import { Link } from 'react-router-dom';

const WhiteButton = ({children}) => {
	return (
		<div className={styles.experience_block}>
            <Link to ="/sobre" className={styles.white_button}>
				{children}
			</Link> 
		</div>
	);
}

export default WhiteButton;