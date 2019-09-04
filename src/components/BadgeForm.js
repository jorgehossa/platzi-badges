import React, { Component } from 'react';
export default class Badge extends Component {
  handleChange =  e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    })
  }
  handleClick = e => {
    console.log('Click en botón')
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form sumit')
  }
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}