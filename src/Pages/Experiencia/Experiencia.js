import React, {Component} from 'react';
import styles from './Experiencia.module.scss';
import Paragraph from '../../Components/Paragraph/Paragraph.js';
import ExperienceBlock from '../../Components/ExperienceBlock/Experience-block.js';

class Experiencia extends Component {
	render() {
		return (
			<main className={styles.experiencia}>
				<div className="container">
					<h1>Experiência</h1>
                    <ExperienceBlock>
                        <h2>Junior - Desenvolvedor Front-end</h2>
                        <h3>Agência Kindle | Nov 2018 - Presente</h3>
						<p>Desenvolvimento e/ou manutenção de sites e ecommerces (woocommerce), utilizando de tecnologias como HTML5, CSS3, Javascript, jQuery e Git.</p>
                    </ExperienceBlock>
					<ExperienceBlock>
                        <h2>Estágio - Desenvolvedor Front-end</h2>
                        <h3>Agência Kindle | Maio 2018 - Out 2018</h3>
						<p>Desenvolvimento de e-mail marketing (HTML/CSS) e algumas pequenas alterações em sites.</p>
                    </ExperienceBlock>
				</div>
			</main>	
		);
	}
}
export default Experiencia;