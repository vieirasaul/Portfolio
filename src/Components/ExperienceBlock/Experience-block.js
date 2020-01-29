import React from 'react';
import styles from './Experience-block.module.scss';

const ExperienceBlock = ({children, children_2}) => {
	return (
		<div>
			<h2 className={styles.estilo_aqui}>
				{children}
			</h2>
            <h3 className={styles.estilo_aqui}>
				{children_2}
			</h3>
		</div>
	);
}

export default ExperienceBlock;