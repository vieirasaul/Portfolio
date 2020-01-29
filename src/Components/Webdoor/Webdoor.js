import React from 'react';
import styles from './Webdoor.module.scss';
import Typist from 'react-typist';
import SaibaMais from '../Buttons/SaibaMais/Saiba-mais.js';

class Webdoor extends React.Component {
  	render() {
    	return (
    		<section className={styles.webdoor}>
				<div className={styles.overlay}>
					<div className={styles.webdoor_content}>
						<Typist>
							Meu nome é Saul Vieira.
							<Typist.Delay ms={500} />
							<br />
							Sou Desenvolvedor Front-end.
						</Typist>
						<SaibaMais />
					</div>	
				</div>
    		</section>
		);
	}
}

export default Webdoor;