import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Import component
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge firstName='Jorge' lastName='Ossa' avatarUrl='https://secure.gravatar.com/avatar/d8cc91554f3b52d1d54a08d299e30e33' jobTitle='Frontend Developer' twitter='jorgehossa'/>, container);
