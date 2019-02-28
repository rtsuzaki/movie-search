import React from 'react';
import PropTypes from 'prop-types';

const MovieInput = (props) => (
  <div>
      <input 
        className="search-box"
        type="search"
        placeholder="Enter your movie search here!"
        value={props.query}
        onChange={props.handleInputChange}
        onKeyDown={props.handleKeyDown}
      />
  </div>  
)

MovieInput.propTypes = {
  query: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

export default MovieInput;
