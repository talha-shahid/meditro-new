import React, { Component } from 'react';

class appointmentForm extends Component{
	render(){
		return(
			<>
				
				<div className="appointment-form form-wraper">
					<h3 className="title">Book Appointment</h3>
					<form action="#">
						<div className="form-group">
							<select className="form-select form-control">
								<option defaultValue>Selecty Department</option>
								<option defaultValue="1">One</option>
								<option defaultValue="2">Two</option>
								<option defaultValue="3">Three</option>
							</select>
						</div>
						<div className="form-group">
							<select className="form-select form-control">
								<option defaultValue>Select Doctor</option>
								<option defaultValue="1">One</option>
								<option defaultValue="2">Two</option>
								<option defaultValue="3">Three</option>
							</select>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Name"/>
						</div>
						<div className="form-group">
							<input type="number" className="form-control" placeholder="Phone Numbers"/>
						</div>
						<div className="form-group">
							<input type="date" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
					</form>
				</div>
			
			</>
		);
	}
}

export default appointmentForm;