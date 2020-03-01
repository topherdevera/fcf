import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
	return (
		
			<nav>				
				<p  onClick = {() => onRouteChange('signin')} className='signout tr pa2 dim pointer underline '>Sign Out</p>
	    	</nav>
		
	 );
}

export default Navigation;