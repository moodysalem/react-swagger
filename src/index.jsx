import { render } from 'react-dom';
import React from 'react';
import Router from './components/Router';

const app = document.getElementById('app');

fetch('https://wtng-servlet-dev.fastmodelsports.com/swagger.json')
  .then(res => res.json())
  .then(swagger => render(<Router swagger={swagger}/>, app))
  .catch(error => {
      console.error(error);
      render(
        <div className="display-flex align-items-center justify-content-center"
             style={{ width: '100%', height: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: 'red' }}><strong>An error occurred</strong></div>
            <div>{error.message}</div>
          </div>
        </div>,
        app
      );
    }
  );