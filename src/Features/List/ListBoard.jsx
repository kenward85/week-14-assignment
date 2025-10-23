import React from 'react';
import Button from '../../shared/Button.jsx';

function ListBoard({ lists, onRename, onDelete }) {
  return (
    <ul className="grid">
      {lists.map((l) => (
        <li key={l.id} className="panel">
          <strong>{l.title}</strong>
          <div className="row gap">
            <Button onClick={() => {
              const next = prompt('New title:', l.title); // simple, still React-compatible
              if (typeof next === 'string' && next.trim()) onRename(l.id, next.trim());
            }}>
              Rename
            </Button>
            <Button onClick={() => onDelete(l.id)}>Delete</Button>
          </div>
          <small>Created {new Date(l.createdAt).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  );
}

export default ListBoard;
