import React from 'react';
import './ProfileOfficer.css';
import { SocialIcon } from 'react-social-icons';

function Profile({src, title, name, linkedin, github}){
	return(
		<div className = 'profile'>
			<img src = {src} alt = "" />
			<div className = 'profile_info'>
				<h2>{title}</h2>
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