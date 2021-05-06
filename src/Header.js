import React from 'react'
import './header.css';
import logo from './logo-min.png';

function Header(){
	return(
		<div className = 'header'>
            <img src = {logo} className = "header__icon" />

			<div className = 'header__left'>
				<a>
        			About
       			</a>
			</div>
			<div className = 'header__center'>
				<a>
        			Learn
       			</a>
			</div>
			<div className = "header__right">
				<a>
        			Contact
       			</a>

			</div>

		</div>

	)
}
export default Header