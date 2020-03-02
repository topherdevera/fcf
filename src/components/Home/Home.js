import React from 'react';


const Home = ({ onRouteChange }) => {
	return (
		<div>
		<h2 className='tc gray f4'>FCF Apps</h2>
			<nav className='sidebar'>				
	
				<p className='tl pa2'>Entry Form</p>
				<ul>
					<li>
						<p onClick = {() => onRouteChange('passenger')} className='tl pa2 f7 dim pointer i underline'>Passenger Entry</p>
					</li>
					<li>
						<p onClick = {() => onRouteChange('vehicle')} className='tl pa2 f7 dim pointer i underline'>Vehicle Entry</p>
					</li>
					<li>
						<p onClick = {() => onRouteChange('location')} className='tl pa2 f7 dim pointer i underline'>Location Entry</p>
					</li>
				</ul>
				<p onClick = {() => onRouteChange('booking')} className='tl pa2 dim pointer'>Book a passenger</p>
				<ul>
					<li>
						<p className='tl pa2 f7 dim pointer i underline'>Passenger List</p>
					</li>
				</ul>
				<ul>
					<li>
						<p className='tl pa2 f7 dim pointer i underline'>Vehicle List</p>
					</li>
				</ul>
	    	</nav>
		</div>
	 );
}

export default Home;