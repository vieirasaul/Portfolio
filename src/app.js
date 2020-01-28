import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Webdoor from './components/webdoor.js';

class App extends React.Component {
  	render() {
    	return (
    		<div>
    			<Header />
    			<main>
    				<Webdoor />
    			</main>
    		</div>
		);
	}
}

export default App;