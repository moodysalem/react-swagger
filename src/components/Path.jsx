import React, { PropTypes, PureComponent } from 'react';
import swagger from '../shapes/SwaggerShape';
import MethodLabel from './MethodLabel';
import _ from 'underscore';
import { Link } from 'react-router';

const REQUIRED = <i style={{ color: 'red', marginRight: 4 }} className="glyphicon glyphicon-asterisk"/>;

const SchemaLink = ({ schema: { type, items, $ref } }) => {
  if (type && items) {
    return (
      <span>
        {type} of <SchemaLink schema={items}/>
      </span>
    );
  }

  const pieces = $ref.split('/'), name = pieces[ pieces.length - 1 ];

  return (
    <span>
      {type ? `${type} of ` : null}
      <Link to={`schema/${name}`}>{name}</Link>
    </span>
  );
};

export default class Path extends PureComponent {
  static propTypes = {
    swagger,
    params: PropTypes.shape({
      path: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired
    })
  };

  render() {
    const { params: { path, method }, swagger: { paths: { [path]: pathInfo } } } = this.props;

    if (!pathInfo) {
      return (
        <div>
          <h2>Invalid Path!</h2>
          <p className="lead">The entered path is not valid!</p>
        </div>
      );
    }

    const endpointInfo = pathInfo[ method ];

    if (!endpointInfo) {
      return (
        <div>
          <h2>Invalid Method!</h2>
          <p className="lead">The selected method is not valid for the path</p>
        </div>
      );
    }

    const { operationId, description, parameters, produces, responses, security, summary, tags } = endpointInfo;

    return (
      <div>
        <h2>
          {operationId}
          <small style={{ marginLeft: 4 }}>{tags.join(', ')}</small>
        </h2>
        <h3><MethodLabel method={method}/> {path}</h3>
        <p className="lead">{summary}</p>
        <p>{description}</p>
        <h4>Parameters</h4>
        <div>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>Name</th>
              <th>Required</th>
              <th>Type</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
              _.map(
                parameters,
                ({ description: paramDescription, in: location, schema, type, name, required, schema: paramSchema }) => (
                  <tr>
                    <td><code>{name}</code></td>
                    <td>{required ? REQUIRED : null}</td>
                    <td>
                      {type ? type : (schema ? <SchemaLink swagger={swagger} schema={schema}/> : null)}
                    </td>
                    <td>{location}</td>
                    <td>{paramDescription}</td>
                  </tr>
                )
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};