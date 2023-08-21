import React, { Component } from 'react';

class commentRespond extends Component{
	render(){
		return(
			<>
				<div className="comment-respond" id="respond">
					<h4 className="widget-title">Leave a Reply</h4>
					<form className="comment-form" id="commentform">
						<p className="comment-form-author">
							<label htmlFor="author">Name <span className="required">*</span></label>
							<input type="text" defaultValue="" name="Author"  placeholder="Author" id="author"/>
						</p>
						<p className="comment-form-email">
							<label htmlFor="email">Email <span className="required">*</span></label>
							<input type="text" defaultValue="" placeholder="Email" name="email" id="email"/>
						</p>
						<p className="comment-form-comment">
							<label htmlFor="comment">Comment</label>
							<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
						</p>
						<p className="form-submit">
							<input type="submit" defaultValue="Submit Comment" className="submit" id="submit" name="submit"/>
						</p>
					</form>
				</div>
				
			</>
		);
	}
}

export default commentRespond;