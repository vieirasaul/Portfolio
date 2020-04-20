import React, {Component} from 'react';
import styles from './Portfolio.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
    state = {
        projects: []
    };

    componentDidMount() {
        fetch('data/portfolio.json')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    projects: res
                });
            });
    }

	render() {
		return (
			<main className={cx(styles.center_main, styles.portfolio)} >
				<div className="container">
                    <h1>Portfolio</h1>
                    <div className={styles.grid_portfolio}>
                        {this.state.projects.map(item => (
                            <Link className={styles.grid_item} key={item.id} style={{ backgroundColor: item.color, backgroundImage: `url(${item.image})` }}>
                                <div className={styles.mask}>
                                    <h2>{item.name}</h2>
                                </div>
                            </Link> 
                        ))}
                    </div>
				</div>
			</main>	
		);
	}
}
export default Portfolio;