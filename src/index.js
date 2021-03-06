import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Rooter, Route } from 'react-router-dom';
import ToTop from './Components/ToTop';

ReactDOM.render(
  <Rooter>
    <ToTop/>
    <Route path="/" component={App} />
  </Rooter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
