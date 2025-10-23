import React from 'react';

function Card({ title, children }) {
  return (
    <section className="card">
      {title ? <h3>{title}</h3> : null}
      {children}
    </section>
  );
}

export default Card;
