import EventCard from './EventCard';
import eventsData from '../data/eventsData.json';

const EventList = ({ searchQuery, onEventSelect }) => {
    const filteredEvents = eventsData.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => onEventSelect(event)} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    );
  };
  
  export default EventList;