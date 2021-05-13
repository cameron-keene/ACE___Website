import React from 'react'
import './header.css';
import logo from './imgs/logo-min.png';

function Header(){
	return(
		<div className = 'header'>
            <img src = {logo} className = "header__icon" />
				

				<a>
        			About
       			</a>
			
				<a>
        			Learn
       			</a>
			
				<a>
        			Contact
       			</a>

		</div>

	)
}
export default Header