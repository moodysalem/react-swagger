import { PropTypes } from 'react';

const { shape, arrayOf, oneOf, number, object, string, node } = PropTypes;

export const InfoShape = shape({
  contact: shape({
    name: string.isRequired
  }).isRequired,
  description: string.isRequired,
  title: string.isRequired,
  version: string.isRequired
});

export const TagShape = shape({  name: string.isRequired });

export default PropTypes.shape({
  host: string.isRequired,
  info: InfoShape.isRequired,
  schemes: arrayOf(string).isRequired,
  securityDefinitions: object.isRequired,
  swagger: oneOf([ '2.0' ]),
  tags: arrayOf(TagShape).isRequired
});