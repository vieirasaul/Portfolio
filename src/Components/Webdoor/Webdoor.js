import React from 'react';
import styles from './Webdoor.module.scss';
import Typist from 'react-typist';
import SaibaMais from '../Buttons/SaibaMais/Saiba-mais.js';

class Webdoor extends React.Component {
  	render() {
    	return (
    		<section className={styles.webdoor}>
				<video className={styles.bg_video} src={ window.location.origin + "/video/bg-video.mp4" } loop autoPlay />
				<div className={styles.webdoor_content}>
						<img className={styles.logo} src={ window.location.origin + "/img/logo.png" } alt="Logo do site"/>
						<Typist className={styles.intro_text}>
							Meu nome é Saul Vieira.
							<Typist.Delay ms={500} />
							<br />
							Sou Desenvolvedor Front-end.
						</Typist>
						<SaibaMais />
					</div>
    		</section>
		);
	}
}

export default Webdoor;