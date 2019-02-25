import React from 'react';

import SuggestionListEntry from './SuggestionListEntry.jsx';

const SuggestionList = (props) => (
  <ul className="suggestion-list">
    {props.suggestions.map((suggestion)=> <SuggestionListEntry suggestion={suggestion} key={suggestion.id} handleMovieSelection={props.handleMovieSelection} />)}
  </ul>
)


export default SuggestionList;
