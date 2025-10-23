import React, { useState } from 'react';
import Button from '../../shared/Button.jsx';

function TodoForm({ onSubmit, priorities }) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState(priorities[1]); // default medium
  const [dueDate, setDueDate] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = title.trim().length >= 3;
  const showError = touched && !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onSubmit({ title: title.trim(), notes: notes.trim(), priority, dueDate: dueDate || null });
    setTitle('');
    setNotes('');
    setPriority(priorities[1]);
    setDueDate('');
    setTouched(false);
  }

  return (
    <form onSubmit={handleSubmit} className="stack">
      <div className="row gap">
        <label htmlFor="todoTitle">Title</label>
        <input
          id="todoTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Buy groceries"
          aria-invalid={showError}
          aria-describedby={showError ? 'todoTitleError' : undefined}
        />
      </div>

      {showError ? <small id="todoTitleError" className="error">Title must be at least 3 characters.</small> : null}

      <div className="row gap">
        <label htmlFor="todoNotes">Notes</label>
        <input
          id="todoNotes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Milk, eggs, bread…"
        />
      </div>

      <div className="row gap">
        <label htmlFor="todoPriority">Priority</label>
        <select id="todoPriority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          {priorities.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="row gap">
        <label htmlFor="todoDue">Due date</label>
        <input id="todoDue" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>

      <Button type="submit" ariaLabel="Add todo">Add Todo</Button>
    </form>
  );
}

export default TodoForm;
