import React, { useState } from 'react';
import Button from '../../shared/Button.jsx';

function ListForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = title.trim().length >= 3;
  const showError = touched && !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onAdd(title.trim());
    setTitle('');
    setTouched(false);
  }

  return (
    <form onSubmit={handleSubmit} className="row gap">
      <label htmlFor="listTitle">List title</label>
      <input
        id="listTitle"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder="e.g., Work, Personal"
        aria-invalid={showError}
        aria-describedby={showError ? 'listTitleError' : undefined}
      />
      <Button type="submit" ariaLabel="Create list">Create</Button>
      {showError ? <small id="listTitleError" className="error">Title must be at least 3 characters.</small> : null}
    </form>
  );
}

export default ListForm;
