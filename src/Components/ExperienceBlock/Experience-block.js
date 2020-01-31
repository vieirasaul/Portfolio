import React from 'react';
import styles from './Experience-block.module.scss';

const ExperienceBlock = ({children}) => {
	return (
		<div className={styles.experience_block}>
            {children}
		</div>
	);
}

export default ExperienceBlock;