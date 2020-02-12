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
                            <h2>UniCarioca</h2>                            
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>Jujuba Joias</h2>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>Instituto Ronald McDonald</h2>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>Comitê Internacional da Cruz Vermelha</h2>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>Anistia Internacional</h2>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>TV Escola</h2>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>São Carlos Saúde Oncológica</h2>
                        </PortfolioItem>  
                        <PortfolioItem>
                            <h2>Levin Rio</h2>
                        </PortfolioItem>
                        <PortfolioItem>
                            <h2>Mario Groisman</h2>
                        </PortfolioItem>   
                    </div>
				</div>
			</main>	
		);
	}
}
export default Portfolio;