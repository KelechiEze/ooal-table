'use client';

import React, { useState } from 'react';
import './AdvocateSection.css';
import { FaUser, FaMapMarkerAlt, FaWalking, FaInstagram } from 'react-icons/fa';

interface Advocate {
  name: string;
  state: string;
  location: string;
  handle: string;
  profileLink: string;
}

const advocates: Advocate[] = [
  {
    name: 'John Smith',
    state: 'California',
    location: 'Golden Gate Park, San Francisco',
    handle: '@johnsmith',
    profileLink: 'https://instagram.com/johnsmith',
  },
  {
    name: 'Maria Rodriguez',
    state: 'Texas',
    location: 'Buffalo Bayou Park, Houston',
    handle: '@mariawalks',
    profileLink: 'https://instagram.com/mariawalks',
  },
  {
    name: 'David Kim',
    state: 'New York',
    location: 'Central Park, New York City',
    handle: '@davidk',
    profileLink: 'https://instagram.com/davidk',
  },
  {
    name: 'Aisha Johnson',
    state: 'Florida',
    location: 'Bayfront Park, Miami',
    handle: '@aisha_j',
    profileLink: 'https://instagram.com/aisha_j',
  },
  {
    name: 'Michael Chen',
    state: 'Illinois',
    location: 'Millennium Park, Chicago',
    handle: '@mike_chen',
    profileLink: 'https://instagram.com/mike_chen',
  },
];

const AdvocateSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAdvocates = advocates.filter((advocate) =>
    advocate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="advocate-container">
      <section className="hero">
        <h1>Out on a Limb</h1>
        <p>Join our global movement to create awareness for people born without limbs</p>
        <span>Together we walk, together we make a difference.</span>
      </section>

      <section className="advocate-section">
        <h2>Our Lead Advocates</h2>
        <p>Find a walk near you and join our mission to raise awareness</p>

        <input
          type="text"
          placeholder="Search lead advocates or locations..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="table-wrapper">
          <table className="advocate-table">
            <thead>
              <tr>
                <th><FaUser className="icon" /> Lead Advocate</th>
                <th><FaMapMarkerAlt className="icon" /> State</th>
                <th><FaWalking className="icon" /> Walk Location</th>
                <th><FaInstagram className="icon" /> Social Media</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdvocates.length > 0 ? (
                filteredAdvocates.map((advocate, index) => (
                  <tr key={index}>
                    <td>{advocate.name}</td>
                    <td>{advocate.state}</td>
                    <td>{advocate.location}</td>
                    <td>
                      <a
                        href={advocate.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        {advocate.handle}
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '1rem', color: 'orangered' }}>
                    🔍 No advocates found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="contact-bar">
          📞 Official Event Contact: <span>+1 (888) 123-4567</span>
        </div>
      </section>
    </div>
  );
};

export default AdvocateSection;
