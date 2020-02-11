import React from 'react';
import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({children}) => {
	return (
		<div className={styles.grid_item}>
            {children}
		</div>
	);
}

export default PortfolioItem;