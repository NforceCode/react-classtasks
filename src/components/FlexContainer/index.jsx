import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = props => {
  const { children, jc, ai, direct } = props;
  const inlineStyles = {
    display: 'flex',
    justifyContent: jc,
    alignItems: ai,
    flexDirection: direct,
  };
  return <div style={inlineStyles}>{children}</div>;
};

FlexContainer.defaultProps = {
  jc: 'flex-start',
  ai: 'stretch',
  direct: 'row',
};

FlexContainer.propTypes = {
  jc: PropTypes.string,
  ai: PropTypes.string,
  direct: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default FlexContainer;
