import React from 'react';
import './PassengerEntry.css';


const PassengerEntry = ({ onRouteChange }) => {
	return (
		<div>
			<h2 className='tc gray f4'>Passenger Entry</h2>
			<nav>				
						<p className='tl pa2'>Entry Form</p>
						<ul>
							<li>
								<p className='tl pa2 f7 dim pointer i underline'>Passenger Entry</p>
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

			<article className="br4 b--black-5 mv3 w-100 w-50-m w-15-2 mw35 center">

			<div className='center pa4 shadow-2'>
				<div >

					<form>		  	  	
						 <div className="form-row">
							
							<div className="form-group col-md-2">
								<label >Firstname</label>
								<input type="text" className="form-control"/>
							</div>

							<div className="form-group col-md-2 ">
								<label>Lastname</label>
								<input type="text" className="form-control"/>
							</div>

							<div className="form-group col-md-2  ">
								<label>Position</label>
								<input type="text" className="form-control"/>
							</div>

							<div className="form-group col-sm-1">
								<label>Gender</label>
								<select id="inputState" name="Gender" className="form-control"><option>MALE</option><option>FEMALE</option></select>
							</div>

						 </div>

						 <div className="form-row">

							<div className="form-group col-md-4">
							    <label >Address</label>
							    <input type="text" className="form-control"/>
							</div>

							<div className="form-group col-md-2">
								<label>Mobile#</label>
								<input type="number" className="form-control"/>
							</div>

							<div className="form-group col-md-1 ">
								<label>Age</label>
								<input type="number" className="form-control"/>
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

export default PassengerEntry;