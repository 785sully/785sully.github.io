import React from 'react';
import EmailIcon from './images/email.svg?react';
import LinkedInIcon from './images/linkedin.svg?react';
import ResumeIcon from './images/resume.svg?react';

const Contact = () => {
	return (
		<section className='contact'>
			<h2>Contact Info</h2>
			<div className='contact-list'>
				<a
					href='mailto:joshua.m.lake@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					<EmailIcon />
				</a>
				<a
					href='https://www.linkedin.com/in/joshualake/'
					target='_blank'
					rel='noreferrer'
				>
					<LinkedInIcon />
				</a>
				<a
					href='../files/josh_lake_resume.pdf'
					target='_blank'
					rel='noreferrer'
				>
					<ResumeIcon />
				</a>
			</div>
		</section>
	);
};

export default Contact;
