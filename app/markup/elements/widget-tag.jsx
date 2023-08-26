import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class widgetTag extends Component {
  render() {
    return (
      <>
        <div className="widget widget_tag_cloud">
          <h4 className="widget-title">Tags</h4>
          <div className="tagcloud">
            <div href="#">Healthcare Solutions</div>
            <div href="#">Medical Billing</div>
            <div href="#">Credentialing Services</div>
            <div href="#">Revenue Cycle Management</div>
            <div href="#">Healthcare Technology</div>
            <div href="#">Healthcare Providers</div>
            <div href="#">Healthcare Transformation</div>
            <div href="#">Healthcare Industry</div>
            <div href="#">Healthcare Optimization</div>
          </div>
        </div>
      </>
    );
  }
}

export default widgetTag;
