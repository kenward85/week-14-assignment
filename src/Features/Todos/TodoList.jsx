import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ items, onToggle, onUpdate, onDelete }) {
  return (
    <ul className="stack">
      {items.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
