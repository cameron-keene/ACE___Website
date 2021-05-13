import React from 'react';
import BackgroundImage from '../features/BackgroundImage'
import BackgroundYoutube from '../features/BackgroundYoutube'
import Footer from '../features/Footer'

function HomePage() {
  return (
  	<div className = "HomePage">
  		<BackgroundImage/>
  		<h1>Latest Video</h1>
  		  <BackgroundYoutube embedId="rokGy0huYEA" />
  		<Footer/>

  	</div>
    
  );
}

export default HomePage;
