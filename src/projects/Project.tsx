import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ExternalLink from '../images/external-link.svg?react';
import  GithubLink from '../images/github.svg?react';
// import extLinkSVG from '../images/external-link.svg';
import type { ProjectItemProps } from '../types/projectData';

const Project:FC<ProjectItemProps> = ({ data }) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
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
