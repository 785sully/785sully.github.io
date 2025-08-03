import React from 'react';
import ProjectItem from './ProjectItem';
import rpg from './data/rpg.json';
import recipeSaver from './data/coming-soon.json';
import wp from './data/wp-poc.json';

const ProjectList = () => {
	return (
		<section className='projects'>
			<h2>Projects</h2>
			<div className='project-list'>
				<ProjectItem data={rpg} />
				<ProjectItem data={wp} />
				<ProjectItem data={recipeSaver} />
			</div>
		</section>
	);
};

export default ProjectList;
