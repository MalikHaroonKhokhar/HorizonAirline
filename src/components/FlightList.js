// src/components/FlightList.js
import React from 'react';

import SydneyImage from './flightimage/sydney.jpg';
import GilgitImage from './flightimage/gilg.jpg';
import GawadarImage from './flightimage/gw.jpeg';



const FlightList = ({ flights, onBookFlight }) => {
  const getImageForFlight = (flightId) => {
    switch (flightId) {
      case 1:
        return GilgitImage;
      case 2:
        return GawadarImage;
      case 3:
        return SydneyImage;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="mt-4 mb-3 text-dark display-5">Available Flights</h2>
      <div className="row">
        {flights.map(flight => (
          <div key={flight.id} className="col-md-4 mb-3">
            <div className="card shadow bg-white rounded">
              <img
                src={getImageForFlight(flight.id)}
                className="card-img-top rounded-top"
                alt={`Flight ${flight.id}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{flight.name}</h5>
                <p className="card-text text-dark">{flight.departure} to {flight.destination}</p>
                <button
                  className={`btn ${flight.booked ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => onBookFlight(flight.id)}
                  disabled={flight.booked}
                >
                  {flight.booked ? 'Booked' : 'Book Flight'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
