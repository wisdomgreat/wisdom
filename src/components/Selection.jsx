import React from 'react';

/* A design-tool selection: violet outline, four corner handles, an optional mono tag on top. */
export default function Selection({ tag, className = '', children, as: Tag = 'div', ...rest }) {
  return (
    <Tag className={`sel ${className}`} {...rest}>
      {tag && <span className="sel-tag">{tag}</span>}
      <span className="sel-handle" data-c="tl" aria-hidden="true" />
      <span className="sel-handle" data-c="tr" aria-hidden="true" />
      <span className="sel-handle" data-c="bl" aria-hidden="true" />
      <span className="sel-handle" data-c="br" aria-hidden="true" />
      {children}
    </Tag>
  );
}

