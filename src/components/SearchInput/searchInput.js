import React from 'react';
import './searchInput.css';

import { CSSTransition } from 'react-transition-group';

function SearchInput(props) {
  return (
    <CSSTransition appear in={props.in} timeout={1500} classNames="input">
      <input
        placeholder="e.g. Moon"
        onChange={(event) => props.handleInputChange(event)}
      />
    </CSSTransition>
  );
}

export default SearchInput;
