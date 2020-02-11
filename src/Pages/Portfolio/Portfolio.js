import React, {Component} from 'react';
import styles from './Portfolio.module.scss';
import cx from 'classnames';
import PortfolioItem from '../../Components/PortfolioItem/PortfolioItem';

class Portfolio extends Component {
	render() {
		return (
			<main className={cx(styles.center_main, styles.portfolio)} >
				<div className="container">
                    <h1>Portfolio</h1>
                    <div className={styles.grid_portfolio}>
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <p>blublu</p>
                        </PortfolioItem>   
                    </div>
				</div>
			</main>	
		);
	}
}
export default Portfolio;