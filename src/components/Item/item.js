import React from 'react';
import './item.css';

import { CSSTransition } from 'react-transition-group';

function Item(props) {
  return (
    <CSSTransition
      appear
      in
      timeout={2000 + props.delay * 200}
      classNames="item-trans"
    >
      <div
        className="item"
        style={{
          backgroundImage: `url(${props.href})`,
          transitionDelay: `${props.delay * 0.2}s`,
        }}
      ></div>
    </CSSTransition>
  );
}

export default Item;
