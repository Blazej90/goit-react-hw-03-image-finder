import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, hasMore }) => {
  return (
    <>
      {hasMore && (
        <button className="button" onClick={onClick}>
          Load more
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Button;
