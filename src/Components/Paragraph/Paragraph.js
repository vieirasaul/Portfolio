import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({children}) => {
	return (
		<div>
			<p className={styles.paragraph}>
				{children}
			</p>
		</div>
	);
}

export default Paragraph;