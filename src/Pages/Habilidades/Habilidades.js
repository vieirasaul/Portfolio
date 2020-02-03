import React, {Component} from 'react';
import styles from './Habilidades.module.scss';
import SkillChart from '../../Components/SkillChart/Skill-chart';

class Habilidades extends Component {
	render() {
		return (
			<main className={styles.center_main}>
				<div className="container">
					<h1>Habilidades</h1>
                    <SkillChart ><h2 style={{ width: "80%" }}>Html</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "70%" }}>Css</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "50%" }}>JavaScript</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "55%" }}>jQuery</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "40%" }}>React</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "50%" }}>Sass</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "50%" }}>Git</h2></SkillChart>
                    <SkillChart ><h2 style={{ width: "45%" }}>WordPress</h2></SkillChart>
				</div>
			</main>	
		);
	}
}
export default Habilidades;