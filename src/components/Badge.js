import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../global.css';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return <section className='Badge'>
      <header className='Badge__header'>
        <img src={confLogo} alt="Logo conferencia"/>
      </header>
      <section className='Badge__section-name'>
        <img className='Badge__avatar' src="https://secure.gravatar.com/avatar/d8cc91554f3b52d1d54a08d299e30e33" alt="Avatar"/>
        <h1>Jorge <br /> Ossa</h1>
      </section>
      <section className="Badge__section-info">
        <h3>Frontend Developer</h3>
        <div>@jorgehossa</div>
      </section>
      <footer className='Badge__footer'>
        #platziConf
      </footer>
    </section>
  }
}

export default Badge;