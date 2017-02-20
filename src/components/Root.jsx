import React, { PropTypes, PureComponent } from 'react';
import swagger from '../shapes/SwaggerShape';
import _ from 'underscore';
import { Link } from 'react-router';
import InfoHeader from './InfoHeader';
import PathNavigation from './PathNavigation';

export default class Swagger extends PureComponent {
  static propTypes = {
    swagger,
    params: PropTypes.shape({
      tag: PropTypes.string
    })
  };
  static defaultProps = {};

  render() {
    const {
      children,
      swagger: {
        info, definitions, paths
      }
    } = this.props;

    return (
      <div className="display-flex align-items-stretch" style={{ width: '100%', height: '100%' }}>
        <div className="flex-shrink-0 display-flex flex-direction-column hidden-sm hidden-xs"
             style={{ width: 420, boxShadow: '0 0 1px #333' }}>
          <InfoHeader info={info} style={{ padding: '4px 8px' }}/>

          <nav className="flex-grow-1 flex-shrink-1"
               style={{ overflow: 'auto', padding: '4px 8px', borderTop: '1px solid rgba(0,0,0,0.4)' }}>
            <h3>Paths</h3>
            <PathNavigation paths={paths}/>

            <h3>Schema</h3>
            <div>
              {
                _.chain(definitions)
                  .map((definition, name) => ({ ...definition, name }))
                  .sortBy('name')
                  .map(
                    ({ name }) => (
                      <div key={name}>
                        <Link to={`schema/${name}`}>{name}</Link>
                      </div>
                    )
                  )
                  .value()
              }
            </div>
          </nav>
        </div>

        <div className="flex-grow-1 flex-shrink-1 display-flex">
          <div style={{ padding: '4px 12px', overflow: 'auto' }} className="flex-grow-1">
            <InfoHeader className="visible-xs visible-sm" info={info}/>
            <div>
              { children }
            </div>
          </div>
        </div>
      </div>
    );
  }
};