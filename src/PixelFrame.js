import React from 'react';
import Pixel from './Pixel';

function PixelFrame() {
	// get the screen dimensions and then figure out how many pixels we need
	// width * height / size of pixel
	// const pixelsNeeded = Math.floor(document.documentElement.clientWidth * document.documentElement.clientHeight / 20);
	// const parent = document.querySelector('.pixel-frame').parentElement;
	// const pixelsNeeded = Math.floor(
	// 	(parent.clientWidth * parent.clientHeight) / 20
	// );

	// const pixelsNeeded = Math.floor(window.innerWidth * window.innerHeight / 20);

	// 61k pixels...it grinds the browser to a halt...how can we do this?

	// console.log(pixelsNeeded);
	// then re-render on screen size change
	return (
		<div className='pixel-frame'>
			{[...Array(360)].map((x, i) => (
				<Pixel key={i} count={i} />
			))}
		</div>
	);
}

export default PixelFrame;
