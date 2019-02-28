import React from 'react';

const MovieInput = (props) => (
  <div>
      <input className="search-box" type="search" placeholder="Enter your movie search here!" value={props.query} onChange={props.handleInputChange} onKeyDown={props.handleKeyDown} />
  </div>  
)

export default MovieInput;
