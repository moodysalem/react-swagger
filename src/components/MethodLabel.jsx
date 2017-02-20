import React, { PropTypes, PureComponent } from 'react';
import cx from 'classnames';

const METHOD_LABEL_MAP = {
  get: 'success',
  delete: 'danger',
  put: 'info',
  post: 'primary'
};

export default class MethodLabel extends PureComponent {
  static propTypes = {
    method: PropTypes.string.isRequired
  };

  render() {
    const { method, style, className, ...rest } =this.props;

    return (
      <span {...rest} style={{ textTransform: 'uppercase', ...style }}
            className={cx(`label label-${METHOD_LABEL_MAP[ method ] || 'default'}`, className)}>
        {method}
      </span>
    );
  }
};