import React from 'react';
import Item from '../Item/item.js';

function Gallery(props) {
  return props.results.map((item, index) => (
    <Item href={item.links[0].href} key={index} />
  ));
}

export default Gallery;
