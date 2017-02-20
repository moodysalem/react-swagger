import React, { PropTypes, PureComponent } from 'react';
import swagger from '../shapes/SwaggerShape';

export default class Schema extends PureComponent {
  static propTypes = {
    params: {
      name: PropTypes.string.isRequired
    },
    swagger
  };

  render() {
    const { params: { name }, swagger: { definitions: { [name]: definition } } } = this.props;

    if (!definition) {
      return (
        <div>
          <h2>Schema Not Found!</h2>
          <p className="lead">
            The URL entered does not reference a valid schema
          </p>
        </div>
      );
    }

    return (
      <div>
        <h2>TODO: Schema Display</h2>
        <p className="lead">
          This page is a work in progress.
        </p>
      </div>
    );
  }
};