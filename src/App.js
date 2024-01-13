// src/App.js
import React, { useState } from 'react';
import FlightList from './components/FlightList';
import logo from './logo.png';

const App = () => {
  const [flights, setFlights] = useState([
    { id: 1, name: 'Flight 101', departure: 'Lahore', destination: 'Gilgit', booked: false },
    { id: 2, name: 'Flight 202', departure: 'Lahore', destination: 'Gawadar', booked: false },
    { id: 3, name: 'Flight 303', departure: 'Lahore', destination: 'Sydney', booked: false },
  ]);

  const handleBookFlight = (flightId) => {
    setFlights((prevFlights) => {
      return prevFlights.map(flight => {
        if (flight.id === flightId) {
          return { ...flight, booked: true };
        }
        return flight;
      });
    });

    // Open a new window with a tick animation and success message
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <style>
            @keyframes tick {
              0% { transform: scaleX(0) }
              100% { transform: scaleX(1) }
            }
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              background-color: rgba(255, 255, 255, 0.8);
            }
            .tick {
              display: inline-block;
              width: 50px;
              height: 50px;
              border: 2px solid #2196F3;
              border-radius: 50%;
              animation: tick 0.5s ease-in-out;
            }
            .success-message {
              font-size: 24px;
              color: #2196F3;
              margin-left: 10px;
            }
          </style>
        </head>
        <body>
          <div class="tick"></div>
          <div class="success-message">Your flight is booked successfully!</div>
        </body>
      </html>
    `);
    setTimeout(() => newWindow.close(), 2000); // Close the window after 2 seconds
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Horizon Airline" height="30" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="marquee bg-primary text-light p-2">
        <marquee behavior="scroll" direction="left" scrollamount="8" style={{ color: '#fff', fontSize: '18px', maxWidth: '100%' }}>
          🌟 Special Discount: Use code HORIZON50 for 50% off on your next flight! 🌟
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ✈️ Live Flights: Lahore to Gilgit, Lahore to Gawadar, Lahore to Sydney
        </marquee>
      </div>
      <div className="container">
        <h1 className="mt-4 mb-4 text-dark display-4 text-center">Horizon Airline Booking</h1>
        <FlightList flights={flights} onBookFlight={handleBookFlight} />
      </div>
    </div>
  );
};

export default App;
