import React from 'react';
// import { createRoot } from 'react-dom/client'
import './styles/index.scss';
import Hero from './Hero.jsx';
import ProjectList from './ProjectList.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Project from './projects/Project.jsx';
import FourOhFour from './FourOhFour.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import rpg from './data/rpg.json';
import wp from './data/wp-poc.json';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<Routes>
					<Route exact path='/' element={
						<>
							<Hero />
							<ProjectList />
							<Contact />
							<Footer />
						</>
					} />
					<Route path='/projects/rpg' element={<Project data={rpg} />} />
					<Route path='/projects/wp-poc' element={<Project data={wp}/>} />
					{/* update once we have the third project completed */}
					{/* <Route path='/projects/recipe-saver'>
						<Project data={comingSoon} />
					</Route> */}
					<Route path='/' element={<FourOhFour />} />
				</Routes>
			</div>
		</Router>
	);
};
export default App;