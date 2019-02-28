import React from 'react';

const SuggestionListEntry = (props) => (
  <li 
    className={props.suggestionSelectIndex === props.index ? 'selected' : 'suggestion-list-entry'}
    onClick={() => props.handleMovieSelection(props.title)}
  >
    {props.title}
  </li>
)

export default SuggestionListEntry;