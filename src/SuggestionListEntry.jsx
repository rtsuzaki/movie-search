import React from 'react';
import PropTypes from 'prop-types';

const SuggestionListEntry = (props) => (
  <li 
    className={props.suggestionSelectIndex === props.index ? 'selected' : 'suggestion-list-entry'}
    onClick={() => props.handleMovieSelection(props.title)}
  >
    {props.title}
  </li>
)

SuggestionListEntry.propTypes = {
  suggestionSelectIndex: PropTypes.number,
  index: PropTypes.number,
  handleMovieSelection: PropTypes.func,
};

export default SuggestionListEntry;