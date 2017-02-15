import { render } from 'react-dom';
import React from 'react';
import Router from './Router';

fetch('https://wtng-servlet-staging.fastmodelsports.com/swagger.json')
  .then(res => res.json())
  .then(swagger => render(<Router swagger={swagger}/>, document.getElementById('app')))
  .catch(error => alert(`An error occurred: ${error.message}`));