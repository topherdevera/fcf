import React from 'react';



const BookPassenger = ({ onRouteChange }) => {
	return (
		<div>
			<h2 onClick = {() => onRouteChange('home')} className='tc gray f4 pointer'>Booking of Passenger</h2>
		</div>
	 );
}

export default BookPassenger;