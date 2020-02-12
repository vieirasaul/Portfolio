import React from 'react';
import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({children}) => {
	return (
		<a href="#" className={styles.grid_item}>
            <div className={styles.item_content}>
                {children}
            </div>
		</a>
	);
}

export default PortfolioItem;