import React, {Component} from 'react';
import styles from './Contato.module.scss';
import cx from 'classnames';
import Paragraph from '../../Components/Paragraph/Paragraph';
import MailButton from '../../Components/Buttons/MailButton/MailButton';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

class Contato extends Component {
	render() {
		return (
			<main className={cx(styles.center_main, styles.contato)} >
				<div className="container">
                    <h1>Contato</h1>
					<Paragraph>Você pode entrar em contato comigo pelo seguinte e-mail:<br/><strong>vieira_saul@yahoo.com.br</strong></Paragraph>
					<MailButton>enviar e-mail</MailButton>
					<Paragraph>Ou pelas redes sociais:</Paragraph>
					<SocialMedia />
				</div>
			</main>	
		);
	}
}
export default Contato;