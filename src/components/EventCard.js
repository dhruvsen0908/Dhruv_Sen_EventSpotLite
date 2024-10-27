import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => (
  <div className="event-card" onClick={onClick}>
    <div>
      <img src={event.image} alt={`${event.name} event`} width="100%" />
    </div>
    <h2>{event.name}</h2>
    <p>{event.date}</p>
    <p>{event.location}</p>
  </div>
);

export default EventCard;
