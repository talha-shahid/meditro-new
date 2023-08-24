import React, { Component } from "react";

//react-icons imports
import { BiChevronDown } from "react-icons/bi";

class AppointmentForm extends Component {
  render() {
    return (
      <>
        <div className="appointment-form form-wraper">
          <h3 className="title">Book Appointment</h3>
          <form action="#">
            <div className="form-group">
              <select className="form-select form-control">
                <option defaultValue>Medical Billing Services</option>
                <option defaultValue="1">Credentialing & Enrollment</option>
                <option defaultValue="2">Medical Billing Services</option>
                <option defaultValue="3">Front Office Services</option>
                <option defaultValue="3">Patient Billing</option>
                <option defaultValue="3">Practice Audit</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-select form-control">
                <option defaultValue>Individual Provider</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                size="30"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Numbers"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                size="30"
                required
              />
            </div>
            <div className="form-group">
              <input type="date" className="form-control" />
            </div>
            <button type="submit" className="btn btn-secondary btn-lg">
              Appointment Now
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AppointmentForm;
