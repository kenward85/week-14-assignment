import React from 'react';
import { Link } from 'react-router-dom';
import Card from './shared/Card.jsx';

function NotFound() {
  return (
    <Card title="404 – Not Found">
      <p>The page you’re looking for doesn’t exist.</p>
      <p><Link to="/">Go Home</Link></p>
    </Card>
  );
}

export default NotFound;
