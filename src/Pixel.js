import React from 'react';

function Pixel({ count }) {
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	// const colorList = ['#e26d5c;','#5C80E2;','#91F5AD;','#C3BEF7;'];
	// const colorList = ['#e26d5c','#C3BEF7','#56423e','#bea6a1','#00a7a8','#007274'];
	const colorList = [
		'#2f4858',
		'#2c697b',
		'#238c96',
		'#2eafa8',
		'#58d3af',
		'#91f5a',
	];
	const keyframe = `
    .pixel${count} {
      animation: colorchange${count} 8s infinite alternate;
    }
    @keyframes colorchange${count}
    {
      0%   {background: ${colorList[getRandomInt(6)]}}
      25%  {background: ${colorList[getRandomInt(6)]}}
      50%  {background: ${colorList[getRandomInt(6)]}}
      75%  {background: ${colorList[getRandomInt(6)]}}
      100% {background: ${colorList[getRandomInt(6)]}}
    }
  
  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
      0%   {background: ${colorList[getRandomInt(6)]}}
      25%  {background: ${colorList[getRandomInt(6)]}}
      50%  {background: ${colorList[getRandomInt(6)]}}
      75%  {background: ${colorList[getRandomInt(6)]}}
      100% {background: ${colorList[getRandomInt(6)]}}
    }`;
	return (
		<>
			<style>{keyframe}</style>
			<div className={'pixel pixel' + count}></div>
		</>
	);
}

export default Pixel;
