import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ data }) => {
	return (
		<>
			<Link to={data.link}>
				<div className='card'>
					<h3>{data.title}</h3>
					<img src={data.thumbImageUrl} alt={data.thumbImageAlt} />
					<p>{data.shortDescription}</p>
				</div>
			</Link>
		</>
	);
};

export default ProjectItem;
