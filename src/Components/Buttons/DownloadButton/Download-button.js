import React from 'react';
import styles from './Download-button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadButton = ({children}) => {
	return (
		<div className={styles.experience_block}>
            <a href={ window.location.origin + "/CV-Saul.pdf" } className={styles.download_button} download>
            <FontAwesomeIcon icon={faFileDownload} /> {children}
			</a> 
		</div>
	);
}

export default DownloadButton;