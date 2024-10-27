import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css';

const Modal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>X</button>
        <img src={event.image} alt={event.name} className="modal-image" />
        <div className="modal-info">
          <h2>{event.name}</h2>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
