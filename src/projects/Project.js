import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ExternalLink } from '../images/external-link.svg';
import { ReactComponent as GithubLink } from '../images/github.svg';
// import extLinkSVG from '../images/external-link.svg';

const Project = ({ data }) => {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<section className='project-page'>
			<h1>
				<img src={data.imageUrl} alt={data.imageAlt} />
			</h1>
			<p dangerouslySetInnerHTML={{ __html: data.longDescription }} />
			<a
				className='external-link'
				href={data.externalLink}
				target='_blank'
				rel='noreferrer'
			>
				Site <ExternalLink />
			</a>
			<a
				className='external-link'
				href={data.githubLink}
				target='_blank'
				rel='noreferrer'
			>
				Github <GithubLink />
			</a>
			<button onClick={goBack}>&larr; back</button>
		</section>
	);
};

export default Project;
