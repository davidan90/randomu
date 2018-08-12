import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// this condition for hot reload
if (module.hot) {
  module.hot.accept();
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('randomu-app')
);
