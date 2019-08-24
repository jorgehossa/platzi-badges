import React, { Component } from 'react';
// ASSETS:
import 'bootstrap/dist/css/bootstrap.css';
import '../global.css';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
// TEMPLATE:
export default class Badge extends Component {
  render() {
    return <section className='Badge'>
      <header className='Badge__header'>
        <img src={confLogo} alt="Logo conferencia" />
      </header>
      <section className='Badge__section-name'>
        <img className='Badge__avatar' src={this.props.avatarUrl} alt="Avatar" />
        <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
      </section>
      <section className="Badge__section-info">
        <h3>{this.props.jobTitle}</h3>
        <div>@{this.props.twitter}</div>
      </section>
      <footer className='Badge__footer'>
        #platziConf
      </footer>
    </section>
  };
};