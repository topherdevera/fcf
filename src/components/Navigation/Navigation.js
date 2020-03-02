import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		return (		
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>			
				<p  onClick = {() => onRouteChange('signin')} className='signout tr pa2 dim pointer underline '>Sign Out</p>
	    	</nav>	
	 	);	
}

export default Navigation;