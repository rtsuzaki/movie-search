import React from 'react';

import SuggestionListEntry from './SuggestionListEntry.jsx';

const SuggestionList = (props) => (
  <ul className="suggestion-list">
    {props.suggestions.map((suggestion, index) => <SuggestionListEntry key={suggestion.id} title={suggestion.title} handleMovieSelection={props.handleMovieSelection} suggestionSelectIndex={props.suggestionSelectIndex} index={index} />)}
  </ul>
)

export default SuggestionList;
