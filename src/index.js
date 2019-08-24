import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
// COMPONENTS:
import BadgeNew from './pages/BadgeNew';
// CONTAINER:
const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);
