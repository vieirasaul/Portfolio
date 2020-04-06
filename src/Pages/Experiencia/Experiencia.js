import React, {Component} from 'react';
import styles from './Experiencia.module.scss';
import ExperienceBlock from '../../Components/ExperienceBlock/ExperienceBlock';
import DownloadButton from '../../Components/Buttons/DownloadButton/DownloadButton';

class Experiencia extends Component {
	render() {
		return (
			<main className={styles.center_main}>
				<div className="container">
					<h1>Experiência</h1>
                    <ExperienceBlock>
                        <h2>Junior - Desenvolvedor Front-end</h2>
                        <h3>Agência Kindle | Nov 2018 - Presente</h3>
						<p>Desenvolvimento e manutenção de sites e ecommerces, utilizando de tecnologias como HTML5, CSS3, Javascript, jQuery, Git e WordPress.</p>
                    </ExperienceBlock>
					<ExperienceBlock>
                        <h2>Estágio - Desenvolvedor Front-end</h2>
                        <h3>Agência Kindle | Maio 2018 - Out 2018</h3>
						<p>Desenvolvimento de e-mail marketing (HTML/CSS) e algumas pequenas alterações em sites.</p>
                    </ExperienceBlock>
					<h1>Formação Acadêmica</h1>
                    <ExperienceBlock>
                        <h2>Análise e desenvolvimento de Sistemas</h2>
                        <h3>Instituto Infnet | Jun 2015 - Ago 2018</h3>
						<p>Incompleto, trancado no último período.</p>
                    </ExperienceBlock>
					<ExperienceBlock>
                        <h2>Inglês</h2>
                        <h3>Curso Fisk | Nov 2010 - Abr 2013</h3>
                    </ExperienceBlock>
					<DownloadButton>Baixar currículo</DownloadButton>
				</div>
			</main>	
		);
	}
}
export default Experiencia;