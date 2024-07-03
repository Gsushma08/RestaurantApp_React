import React, { useState } from "react";
import "../styles/TableBooking.css";

const TableBooking = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const handleClose = () => {
    onClose(); // Close the modal

    window.location.href = "/";
  };

  if (!isOpen) return null;

  return (
    <div className="booking-overlay">
      <div className="booking-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        {showConfirmation ? (
          <div className="confirmation-message">
            <h2>Thank you for reserving a table.</h2>
            <p>The confirmation message has been sent to you.</p>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
          </div>
        ) : (
          <>
            <h2 className="booking-title">Reserve a Table</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <label className="form-info">Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Name.."
                required
              />

              <label className="form-info">Phone Number</label>
              <input
                className="form-input"
                type="text"
                placeholder="Phone Number.."
                required
              />

              <label className="form-info">Date & Time</label>
              <input className="form-input" type="datetime-local" required />

              <label className="form-info">Number Of Adults</label>
              <select className="form-selection" required>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>

              <label className="form-info">Number of Children</label>
              <select className="form-selection" required>
                <option value="">Select</option>
                <option value="1">0</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
                <option value="6">5</option>
              </select>

              <button type="submit" className="book-button">
                Book Now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TableBooking;
