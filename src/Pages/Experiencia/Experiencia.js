import React, {Component} from 'react';
import styles from './Experiencia.module.scss';
import Paragraph from '../../Components/Paragraph/Paragraph.js';
import ExperienceBlock from '../../Components/ExperienceBlock/Experience-block.js';

class Experiencia extends Component {
	render() {
		return (
			<main className={styles.sobre}>
				<div className="container">
					<h1>Experiência</h1>
                    <ExperienceBlock>
                        <h2>Junior - Desenvolvedor Front-end</h2>
                        <h3>Agência Kindle | Nov 2018 - Presente</h3>
                    </ExperienceBlock>
				</div>
			</main>	
		);
	}
}
export default Experiencia;