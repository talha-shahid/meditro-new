import React, { Component } from 'react';

class widgetSearch extends Component{
	render(){
		return(
			<>
				<div className="widget widget_search">
					<form className="searchform">
						<div className="input-group">
							<input name="text" className="form-control" placeholder="Enter your keywords..." type="text"/>
							<div className="input-group-btn">
								<button type="submit" className="btn btn-secondary"><i className="fa fa-search"></i></button>
							</div> 
						</div>
					</form>
				</div>
				
			</>
		);
	}
}

export default widgetSearch;