import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/nav'


ReactDOM.render(
  <React.StrictMode>
     <Nav/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

