import React, { PropTypes, PureComponent } from 'react';
import swagger from '../shapes/swagger';
import _ from 'underscore';
import { Link } from 'react-router';

export default class Swagger extends PureComponent {
  static propTypes = {
    swagger
  };
  static defaultProps = {};

  render() {
    const {
      children,
      params: {

      },
      swagger: {
        info: { title, description, version },
        tags, definitions
      }
    } = this.props;

    return (
      <div className="sm-up-display-flex align-items-stretch" style={{ width: '100vw', height: '100vh' }}>
        <div className="flex-shrink-0 sm-up-display-flex flex-direction-column"
             style={{
               backgroundColor: 'white',
               minWidth: 300,
               minHeight: 200
             }}>
          <header style={{ padding: 8 }} className="flex-shrink-0">
            <h1>
              {title}
              <small style={{ marginLeft: 8 }}>v{version}</small>
            </h1>
            <p>{description}</p>
          </header>

          <nav className="flex-grow-1 flex-shrink-1"
               style={{ minHeight: 400, borderTop: '1px solid rgba(0,0,0,0.4)', padding: 8, overflow: 'auto' }}>
            <strong>Tags</strong>
            <ul>
              {
                _.map(
                  tags,
                  ({ name }) => <li><Link to={`tags/${name}`}>{name}</Link></li>
                )
              }
            </ul>
            <strong>Schema</strong>
            <ul>
              {
                _.map(
                  definitions,
                  (definition, name) => <li><Link to={`definition/${name}`}>{name}</Link></li>
                )
              }
            </ul>
          </nav>
        </div>

        <div className="flex-grow-1 flex-shrink-1" style={{}}>
          { children }
        </div>
      </div>
    );
  }
};