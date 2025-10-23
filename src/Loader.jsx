import React from 'react';

function Loader({ text = 'Loading…' }) {
  return <div role="status" aria-live="polite" className="loader">{text}</div>;
}

export default Loader;
