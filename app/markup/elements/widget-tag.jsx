import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class widgetTag extends Component {
  render() {
    return (
      <>
        <div className="widget widget_tag_cloud">
          <h4 className="widget-title">Tags</h4>
          <div className="tagcloud">
            <div href="#">Improvement</div>
            <div href="#">Health</div>
            <div href="#">Life</div>
            <div href="#">Covid</div>
            <div href="#">Healthy</div>
            <div href="#">Growth</div>
            <div href="#">Education</div>
            <div href="#">Manage</div>
            <div href="#">General</div>
          </div>
        </div>
      </>
    );
  }
}

export default widgetTag;
