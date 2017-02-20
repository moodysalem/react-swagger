import React, { PropTypes, PureComponent } from 'react';
import { InfoShape } from '../shapes/SwaggerShape';

const Contact = ({ contact: { name, url, email } }) => (
  (url || email) ? <a href={url ? url : `mailto:${email}`}>{name}</a> : <span>{name}</span>
);


export default class InfoHeader extends PureComponent {
  static propTypes = {
    info: InfoShape.isRequired
  };

  render() {
    const { info: { version, title, description, contact }, ...rest } = this.props;

    return (
      <header {...rest}>
        <h1>{title} <small className="text-muted">v{version}</small></h1>
        <p className="lead">{description}</p>
        <p>Created by <Contact contact={contact}/></p>
      </header>
    );
  }
};