import React from 'react';
import Card from './shared/Card.jsx';

function Home() {
  return (
    <div className="stack">
      <Card title="Welcome">
        <p>Manage your lists and todos. Data persists locally in your browser.</p>
      </Card>
      <Card title="Features">
        <ul>
          <li>Create and organize lists</li>
          <li>Add todos with priority and due dates</li>
          <li>Edit / complete / delete</li>
        </ul>
      </Card>
    </div>
  );
}

export default Home;
