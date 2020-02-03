import React, {Component} from 'react';
import styles from './Contato.module.scss';
import cx from 'classnames';
import Paragraph from '../../Components/Paragraph/Paragraph.js';

class Contato extends Component {
	render() {
		return (
			<main className={cx(styles.center_main, styles.contato)} >
				<div className="container">
                    <h1>Contato</h1>
					<Paragraph>
						Texto de contato
					</Paragraph>
				</div>
			</main>	
		);
	}
}
export default Contato;