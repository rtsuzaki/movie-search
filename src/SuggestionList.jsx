import React from 'react';
import PropTypes from 'prop-types';

import SuggestionListEntry from './SuggestionListEntry.jsx';

const SuggestionList = (props) => (
  <ul className="suggestion-list">
    {props.suggestions.map((suggestion, index) => (
      <SuggestionListEntry
        key={suggestion.id}
        title={suggestion.title}
        handleMovieSelection={props.handleMovieSelection}
        suggestionSelectIndex={props.suggestionSelectIndex}
        index={index} 
      />
    ))}
  </ul>
)

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object),
  handleMovieSelection: PropTypes.func,
  suggestionSelectIndex: PropTypes.number,
};

export default SuggestionList;
