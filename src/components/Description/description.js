import React from 'react';
import './description.scss';

import { CSSTransition } from 'react-transition-group';

function Description(props) {
  return (
    <CSSTransition
      appear
      in={props.in}
      timeout={1500}
      unmountOnExit
      classNames="desc"
      onExited={props.handlePageChange}
    >
      <div className="descWrapper">
        <h1 className="title">NASA SEARCHER</h1>
        <p className="description">
          Begin your journey through our amazing galaxy, and discover places you
          never even heard of.
        </p>
        <p className="description">Type anything space-related to start.</p>
      </div>
    </CSSTransition>
  );
}

export default Description;
