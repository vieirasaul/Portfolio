import React from 'react';
import styles from './Avatar.module.scss';

class Avatar extends React.Component {
  	render() {
    	return (
            <div className={styles.avatar}> 
                <img src={ window.location.origin + "/img/avatar-saul.png" } alt="Foto de perfil de Saul Vieira" />
            </div>
		);
	}
}

export default Avatar;