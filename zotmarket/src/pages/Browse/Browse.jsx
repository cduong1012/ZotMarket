import React, { useState } from 'react';
import '../../styles/Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';

function Browse() {
  const [searchQuery, setSearchQuery] = useState('');

  const listings = [
    { name: 'iPad Air', price: 250, location: 'Vista del Campo', tag: 'New' },
    { name: 'Mini Fridge', price: 90, location: 'Middle Earth', tag: 'Used' },
    { name: 'Textbook: Math 2A', price: 30, location: 'Mesa Court', tag: 'Used' },
    { name: 'Bean Bag Chair', price: 25, location: 'Plaza Verde', tag: 'New' },
    { name: 'AirPods Pro', price: 100, location: 'Campus Village', tag: 'New' },
    { name: 'TV Stand', price: 40, location: 'UTC', tag: 'Used' }
  ];

  const filteredListings = listings.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Home">
      <div className="banner" style={{ height: '250px' }}>
        <div className="welcome">Browse Listings</div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="recents">
        <span className="recent-title">All Listings</span>
        <div className='cards'>
          {filteredListings.map((item, index) => (
            <Card 
              key={index} 
              name={item.name} 
              price={item.price} 
              location={item.location} 
              tag={item.tag} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
