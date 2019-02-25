import React from 'react';

const SuggestionListEntry = (props) => (
  <li className="suggestion-list-entry" onClick={() => props.handleMovieSelection(props.suggestion.title)}>
    {props.suggestion.title}
  </li>
)

export default SuggestionListEntry;