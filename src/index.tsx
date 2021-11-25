import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App';
import { mergeStyles } from '@fluentui/react';
import reportWebVitals from './reportWebVitals';
import routes from './routes';
// REST API frontend
import http from 'http';

import { Router } from 'react-router';

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

ReactDOM.render(
  <Router routes={routes}/>,
 document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
