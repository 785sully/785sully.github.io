import type { FC } from 'react';
// import Fortune from './Fortune';
import PixelFrame from './PixelFrame';

const Footer:FC = () => {
	return (
		<footer>
			<div className='footer-wrapper'>
				<PixelFrame />
				{/* <Fortune /> */}
			</div>
		</footer>
	);
}

export default Footer;
