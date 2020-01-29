import React from 'react';
import styles from './Social-media.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class SocialMedia extends React.Component {
  	render() {
    	return (
    		<div className={styles.social_media}>
                <a className={styles.github} href="https://github.com/vieirasaul" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faGithub} />
                </a> 
                <a className={styles.linkedin} href="https://www.linkedin.com/in/vieirasaul/" target="_blank" rel="noopener noreferrer" > 
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
		);
	}
}

export default SocialMedia;