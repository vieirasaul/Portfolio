import React, {Component} from 'react';
import styles from './Sobre.module.scss';
import Avatar from '../../Components/Avatar/Avatar';
import cx from 'classnames';
import Paragraph from '../../Components/Paragraph/Paragraph';

class Sobre extends Component {
	render() {
		return (
			<main className={cx(styles.center_main, styles.sobre)} >
				<div className="container">
					<Avatar />
					<Paragraph>
						Meu nome é <strong>Saul Vieira</strong>, tenho 24 anos e trabalho como <strong>Desenvolvedor Front-end </strong> 
						há pouco mais de 1 ano e meio.
					</Paragraph>
				</div>
			</main>	
		);
	}
}
export default Sobre;