import React, { useEffect, useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { load, save } from '../utils/storage.js';
import Card from '../shared/Card.jsx';
import Loader from '../shared/Loader.jsx';
import ListForm from '../features/lists/ListForm.jsx';
import ListBoard from '../features/lists/ListBoard.jsx';

// Keys for storage
const LS_LISTS = 'ctd_lists';

function ListsPage() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  // useEffect #1: load lists on mount (async)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await load(LS_LISTS, []);
        if (!cancelled) setLists(data);
      } catch {
        if (!cancelled) setErr('Failed to load lists.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true; // cleanup
    };
  }, []);

  // useEffect #2: persist lists when they change
  useEffect(() => {
    save(LS_LISTS, lists).catch(() => setErr('Failed to save lists.'));
  }, [lists]);

  const addList = useCallback((title) => {
    setLists((prev) => [{ id: nanoid(), title, createdAt: Date.now() }, ...prev]);
  }, []);

  const renameList = useCallback((id, title) => {
    setLists((prev) => prev.map((l) => (l.id === id ? { ...l, title } : l)));
  }, []);

  const deleteList = useCallback((id) => {
    setLists((prev) => prev.filter((l) => l.id !== id));
  }, []);

  if (loading) return <Loader text="Loading lists…" />;

  return (
    <div className="stack">
      <Card title="Lists">
        {err ? <p className="error" role="alert">{err}</p> : null}
        <ListForm onAdd={addList} />
        {lists.length === 0 ? (
          <p>No lists yet. Create your first one above.</p>
        ) : (
          <ListBoard lists={lists} onRename={renameList} onDelete={deleteList} />
        )}
      </Card>
    </div>
  );
}

export default ListsPage;
