import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useHeightAdjustment } from '../hooks';
import { useTransitionStyles } from '../styles';

const HeaderMagnet = ({ className, style, ...props }) => {
  const height = useHeightAdjustment();
  const transitionStyles = useTransitionStyles();
  return (
    <div
      className={cx('HeaderMagnet', transitionStyles.smooth, className)}
      style={{ ...style, height, flexShrink: 0 }}
      {...props}
    />
  );
};

HeaderMagnet.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};
HeaderMagnet.defaultProps = {
  className: undefined,
  style: undefined,
};

export default HeaderMagnet;
