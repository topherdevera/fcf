import React from 'react';



const LocationEntry = ({ onRouteChange }) => {
	return (
		<div>
			<h2 className='tc gray f4'>Location Entry</h2>
			<nav>				
						<p className='tl pa2'>Entry Form</p>
						<ul>
							<li>
								<p onClick = {() => onRouteChange('passenger')} className='tl pa2 f7 dim pointer i underline'>Passenger Entry</p>
							</li>
							<li>
								<p onClick = {() => onRouteChange('vehicle')} className='tl pa2 f7 dim pointer i underline'>Vehicle Entry</p>
							</li>
							<li>
								<p className='tl pa2 f7 dim pointer i underline'>Location Entry</p>
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

			<article className="br4 b--black-5 mv3 w-100 w-50-m w-15-2 mw35 center">
			<div className='center pa4 shadow-2'>
				<div >
					<form>		  	  	
						 <div className="form-row">
							
							<div className="form-group col-md-10">
								<label >Location Name</label>
								<input type="text" className="form-control"/>
							</div>


						 </div>

					</form>	
				</div> 
	 	
				<div>
				  <button className='pa2' type="submit" >Add</button>
				  <button className='pa2' type="submit" >Edit</button>
				  <button className='pa2' type="submit" >Delete</button>
				</div>
			</div> 
			</article>
		</div>
	 );
}

export default LocationEntry;