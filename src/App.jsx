import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Todospage from './Features/Todos/Todospage';
import ListPage from './Features/List/ListPage';



// Import shared layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Optional: import global CSS or providers
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Wildcard route for 404 */}
            <Route path = "/Todos" element={<Todospage/>}/>
            <Route path = "/Lists" element={<ListPage/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
