import React from 'react';
import './Profile.css';
import { SocialIcon } from 'react-social-icons';

function Profile({src, name, linkedin, github}){
	return(
		<div className = 'profile'>
			<img src = {src} alt = "" />
			<div className = 'profile_info'>
				<h4>{name}</h4>
				<div className = "profile_icons">
					<SocialIcon url= {linkedin} />
				</div>
				<div className = "profile_icons">
					<SocialIcon url= {github} />
				</div>
			</div>
		</div>
		)
}
export default Profile