import React from 'react'
import './header.css';
import logo from './logo-min.png';

function Header(){
	return(
		<div className = 'header'>
            <img src = {logo} className = "header__icon" />

			


			<div className = 'header__center'>
				<a>
        			🚀🚀🚀🚀🚀
       			</a>
			</div>

			<div className = "header__right">
				<h1>Right</h1>

			</div>

		</div>

	)
}
export default Header