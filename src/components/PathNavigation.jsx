import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import MethodLabel from './MethodLabel';

export default class PathNavigation extends PureComponent {
  static propTypes = {
    paths: PropTypes.object.isRequired
  };

  render() {
    const { paths, ...rest } = this.props;

    return (
      <div {...rest}>
        {
          _.map(
            paths,
            (methods, path) => (
              <div key={path}>
                <strong>{path}</strong>
                <div>
                  {
                    _.map(
                      methods,
                      ({ summary, operationId }, method) => (
                        <span key={method} style={{ marginRight: 4 }} title={summary}>
                          <Link to={`paths/${encodeURIComponent(path)}/${encodeURIComponent(method)}`}>
                            <MethodLabel method={method}/> {operationId}
                          </Link>
                        </span>
                      )
                    )
                  }
                </div>
              </div>
            )
          )
        }
      </div>
    );
  }
};