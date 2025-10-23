import React, { useEffect, useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { PRIORITIES } from '../utils/schema.js';
import { load, save } from '../utils/storage.js';
import Card from '../shared/Card.jsx';
import Loader from '../shared/Loader.jsx';
import TodoForm from '../features/todos/TodoForm.jsx';
import TodoList from '../features/todos/TodoList.jsx';

// Keys for storage
const LS_TODOS = 'ctd_todos';

function TodosPage() {
  const [todos, setTodos] = useState([]);     // {id,title,notes,priority,isCompleted,dueDate,createdAt}
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  // useEffect #1: load todos on mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await load(LS_TODOS, []);
        if (!cancelled) setTodos(data);
      } catch {
        if (!cancelled) setErr('Failed to load todos.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // useEffect #2: persist todos when they change
  useEffect(() => {
    save(LS_TODOS, todos).catch(() => setErr('Failed to save todos.'));
  }, [todos]);

  const addTodo = useCallback((payload) => {
    setTodos((prev) => [
      { id: nanoid(), createdAt: Date.now(), isCompleted: false, ...payload },
      ...prev,
    ]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)));
  }, []);

  const updateTodo = useCallback((id, patch) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  if (loading) return <Loader text="Loading todos…" />;

  return (
    <div className="stack">
      <Card title="Add a Todo">
        {err ? <p className="error" role="alert">{err}</p> : null}
        <TodoForm onSubmit={addTodo} priorities={PRIORITIES} />
      </Card>

      <Card title="Your Todos">
        {todos.length === 0 ? (
          <p>Nothing here yet. Add your first todo above.</p>  // conditional #1
        ) : (
          <TodoList
            items={todos}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        )}
      </Card>
    </div>
  );
}

export default TodosPage;
