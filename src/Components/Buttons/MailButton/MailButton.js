import React from 'react';
import styles from './MailButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MailButton = ({children}) => {
	return (
		<div className={styles.experience_block}>
            <a href="mailto:vieira_saul@yahoo.com.br" className={styles.mail_button}>
                <FontAwesomeIcon icon={faEnvelope} /> {children}
			</a> 
		</div>
	);
}

export default MailButton;