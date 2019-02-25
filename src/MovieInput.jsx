import React from 'react';

const MovieInput = (props) => (
  <div>
    <input className="search-box" placeholder="Enter your movie search here!" value={props.query} onChange={props.handleInputChange}/>
  </div>  
)

export default MovieInput;
