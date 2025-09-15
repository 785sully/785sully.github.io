import React, { useState, useEffect } from 'react';

const Fortune = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [fortuneText, setFortuneText] = useState([]);

	// Fortunes via: https://joshmadison.com/2008/04/20/fortune-cookie-fortunes/

	useEffect(() => {
		fetch('https://fortunecookie785.herokuapp.com/fortune')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setFortuneText(result.fortune);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading Fortune...</div>;
	} else {
		return (
			<div className='fortune'>
				<p>
					<span>&ldquo;</span>
					{fortuneText}
					<span>&rdquo;</span>
				</p>
				<p>
					This fortune comes from an api that I created and host on
					Heroku. It randomly returns one of 100 different fortunes.
				</p>
			</div>
		);
	}
};

export default Fortune;
