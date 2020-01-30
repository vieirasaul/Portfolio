import React, {Component} from 'react';
import styles from './Sobre.module.scss';
import Avatar from '../../Components/Avatar/Avatar.js';
import Paragraph from '../../Components/Paragraph/Paragraph.js';

class Sobre extends Component {
	render() {
		return (
			<main className={styles.sobre}>
				<div className="container">
					<Avatar />
					<Paragraph>
						<strong>Meu nome é Saul Vieira</strong>, tenho 24 anos consectetur adipiscing elit. 
						In quis fermentum felis. Mauris id pulvinar tortor. Donec tincidunt magna eu tellus pellentesque commodo. Morbi aliquet facilisis turpis,id rutrum dui sodales et. Sed sed pulvinar nulla. Duis magna nulla, tincidunt sit amet suscipit et, congue vel massa. Vestibulum egestas blandit velit, vitae pharetra nibh tincidunt sed. Etiam leo libero, tincidunt ac nulla a, faucibus pharetra arcu. Mauris dapibus, dolor et faucibus aliquet, dui neque tincidunt quam, vitae malesuada arcu augue vel mi. Donec dignissim eget turpis ac molestie. Duis quis iaculis neque. 
					</Paragraph>
				</div>
			</main>	
		);
	}
}
export default Sobre;