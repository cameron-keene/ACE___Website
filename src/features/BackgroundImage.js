import React from 'react'
import './BackgroundImage.css';
import image from './background.png';
function BackgroundImage(){
	return(
		<div className = 'BackgroundImage'>
            <h1 className = "BackgroundImage_text">UF Association of Computer Engineers</h1>
			<img src={image}></img>
		</div>
		
		

	)
}
export default BackgroundImage