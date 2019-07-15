import React from 'react';
import './index.scss';

function Title({
  children,
  level = 1,
  colorClass = 'color-yellow',
  weightClass = 'font-weight-700',
}) {
  const Component = level > 6 || level < 1 ? 'h1' : `h${level}`;
  const className = `Title Title__level${level} ${colorClass} ${weightClass}`;

  return <Component className={className}>{children}</Component>;
}

export default Title;
