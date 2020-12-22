import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nanum Gothic:400,700,800', 'sans-serif']
  }
});

ReactDOM.render(
    <Routes />,
  document.getElementById('root')
);
