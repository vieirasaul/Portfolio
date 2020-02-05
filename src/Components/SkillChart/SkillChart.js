import React from 'react';
import styles from './SkillChart.module.scss';

const SkillChart = ({children}) => {
	return (
		<div className={styles.skill_chart}>
            {children}
		</div>
	);
}

export default SkillChart;