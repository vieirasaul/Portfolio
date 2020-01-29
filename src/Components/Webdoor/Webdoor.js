import React from 'react';
import styles from './Webdoor.module.scss';
import Typist from 'react-typist';

class Webdoor extends React.Component {
  	render() {
    	return (
    		<section className={styles.webdoor}>
				<Typist>
        			Meu nome é Saul Vieira.
        			<Typist.Delay ms={500} />
  					<br />
  					Sou Desenvolvedor Front-end.
      			</Typist>
    		</section>
		);
	}
}

export default Webdoor;