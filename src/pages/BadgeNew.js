import React, { Component } from 'react';
// ASSETS:
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
// COMPONENTS:
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';
// TEMPLATE:
export default class BadgeNew extends Component {
  state = { form: {} }

  handleChange = e => {
    this.setState({
      form: {
        [e.target.name]: e.target.value,
      }
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <Badge firstName='Jorge'
                lastName='Ossa'
                avatarUrl='https://secure.gravatar.com/avatar/d8cc91554f3b52d1d54a08d299e30e33'
                jobTitle='Frontend Developer'
                twitter='jorgehossa' />,
            </div>
            <div className="col col-md-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};