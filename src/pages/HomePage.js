import React from 'react';
import BackgroundImage from '../features/BackgroundImage'
import BackgroundYoutube from '../features/BackgroundYoutube'
import './HomePage.css'

function HomePage() {
  return (
  	<div className = "homepage">
  		<BackgroundImage/>
  		<h1>Latest Video</h1>
  		  <BackgroundYoutube embedId="rokGy0huYEA" />

  	</div>
    
  );
}

export default HomePage;
