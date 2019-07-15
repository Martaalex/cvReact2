import React from 'react';
import './index.scss';

function DropDown({ items, onChange }) {
  if (!items) {
    return null;
  }

  return (
    <select onChange={onChange}>
      {items.map((value, i) => (
        <option key={i} {...value} />
      ))}
    </select>
  );
}

export default DropDown;