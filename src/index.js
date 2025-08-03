import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Hero from './Hero';
import ProjectList from './ProjectList';
import Contact from './Contact';
import Footer from './Footer';
import Project from './projects/Project';
import FourOhFour from './FourOhFour';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import rpg from './data/rpg.json';
import wp from './data/wp-poc.json';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<Switch>
					<Route exact path='/'>
						<Hero />
						<ProjectList />
						<Contact />
						<Footer />
					</Route>
					<Route path='/projects/rpg'>
						<Project data={rpg} />
					</Route>
					<Route path='/projects/wp-poc'>
						<Project data={wp} />
					</Route>
					{/* update once we have the second project completed */}
					{/* <Route path='/projects/recipe-saver'>
						<Project data={comingSoon} />
					</Route> */}
					<Route path='/' component={FourOhFour} />
				</Switch>
			</div>
		</Router>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
