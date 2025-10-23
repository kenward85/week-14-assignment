import React from 'react';
import Button from '../../shared/Button.jsx';

function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const overdue = todo.dueDate && !todo.isCompleted && new Date(todo.dueDate) < new Date();
  // conditional #2 (overdue)
  // conditional #3 (completed badge)

  return (
    <li className={`panel ${todo.isCompleted ? 'done' : ''}`}>
      <div className="row space">
        <div>
          <strong>{todo.title}</strong>{' '}
          {todo.isCompleted ? <span className="badge">Completed</span> : null}
          {overdue ? <span className="badge warn">Overdue</span> : null}
          {todo.priority === 'high' ? <span className="badge warn">High</span> : null /* conditional #4 */}
          <div className="muted">
            {todo.notes ? <div>{todo.notes}</div> : null}
            {todo.dueDate ? <small>Due {new Date(todo.dueDate).toLocaleDateString()}</small> : null}
          </div>
        </div>

        <div className="row gap">
          <Button onClick={() => onToggle(todo.id)} ariaLabel="Toggle complete">
            {todo.isCompleted ? 'Undo' : 'Complete'}
          </Button>
          <Button onClick={() => {
            const next = prompt('Update title:', todo.title);
            if (typeof next === 'string' && next.trim()) onUpdate(todo.id, { title: next.trim() });
          }}>
            Edit
          </Button>
          <Button onClick={() => onDelete(todo.id)}>Delete</Button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
