import React from 'react';
import './item.css';

function Item(props) {
  return (
    <div
      className="item"
      style={{ backgroundImage: `url(${props.href})` }}
    ></div>
  );
}

export default Item;
