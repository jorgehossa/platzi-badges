import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return <section>
      <header>
        <img src={confLogo} alt="Logo conferencia"/>
      </header>
      <section>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
        <h1>Jorge <br /> Ossa</h1>
      </section>
      <footer>
        <p>Frontend Developer</p>
        <p>@jorgehossa</p>
      </footer>
    </section>
  }
}

export default Badge;