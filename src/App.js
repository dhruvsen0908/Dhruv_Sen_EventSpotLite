import React, { useState } from 'react';
import EventList from './components/EventList';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1>EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search events by name or location..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </header>
      <EventList searchQuery={searchQuery} onEventSelect={setSelectedEvent} />

      {selectedEvent && (
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default App;
