import React from 'react';
import Item from '../Item/item.js';
import './gallery.css';

function Gallery(props) {
  const items = props.results.map((item, index) => (
    <Item href={item.links[0].href} key={index} delay={index} />
  ));

  return <div className="gallery">{items}</div>;
}

export default Gallery;
