import React, { useState } from 'react';
import '../../styles/Browse.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import ListingPopup from '../../components/ListingPopup/ListingPopup';

function Browse() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [activeTab, setActiveTab] = useState('All Items');
  const [selectedListing, setSelectedListing] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [savedListings, setSavedListings] = useState([]);

  const listings = [
    { name: 'iPad Air', price: 250, location: 'Vista del Campo', tag: 'New', category: 'Electronics' },
    { name: 'Mini Fridge', price: 90, location: 'Middle Earth', tag: 'Used', category: 'Electronics' },
    { name: 'Textbook: Math 2A', price: 30, location: 'Mesa Court', tag: 'Used', category: 'Textbooks' },
    { name: 'Bean Bag Chair', price: 25, location: 'Plaza Verde', tag: 'New', category: 'Furniture' },
    { name: 'AirPods Pro', price: 100, location: 'Campus Village', tag: 'New', category: 'Electronics' },
    { name: 'TV Stand', price: 40, location: 'UTC', tag: 'Used', category: 'Furniture' },
    { name: 'Laptop', price: 400, location: 'Campus Village', tag: 'Like New', category: 'Electronics' },
    { name: 'Desk Chair', price: 75, location: 'Mesa Court', tag: 'Good', category: 'Furniture' },
    { name: 'Textbook: Physics', price: 45, location: 'UTC', tag: 'Fair', category: 'Textbooks' },
    { name: 'Nike Sneakers', price: 80, location: 'Vista del Campo', tag: 'Good', category: 'Shoes' },
    { name: 'Denim Jacket', price: 35, location: 'Middle Earth', tag: 'Used', category: 'Clothing' },
    { name: 'Gaming Headset', price: 60, location: 'Campus Village', tag: 'Like New', category: 'Gaming' }
  ];

  const conditions = ['New', 'Like New', 'Good', 'Fair', 'Used'];
  const filterTabs = ['All Items', 'Clothing', 'Textbooks', 'Electronics', 'Gaming', 'Furniture', 'Shoes', 'Sports', 'Books', 'Accessories'];

  const handleConditionChange = (condition) => {
    setSelectedConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handleCardClick = (listing) => {
    setSelectedListing(listing);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedListing(null);
  };

  const handleSaveListing = (listing) => {
    setSavedListings(prev => {
      if (prev.find(item => item.name === listing.name)) {
        // Remove from saved if already saved
        return prev.filter(item => item.name !== listing.name);
      } else {
        // Add to saved
        return [...prev, listing];
      }
    });
  };

  const filteredListings = listings.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const minPrice = priceRange.min === '' ? 0 : parseInt(priceRange.min);
    const maxPrice = priceRange.max === '' ? Infinity : parseInt(priceRange.max);
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    const matchesCondition = selectedConditions.length === 0 || selectedConditions.includes(item.tag);
    const matchesCategory = activeTab === 'All Items' || item.category === activeTab;
    
    return matchesSearch && matchesPrice && matchesCondition && matchesCategory;
  });

  return (
    <div className="browse-container">
      <div className="browse-header">
        <div className="browse-title">Browse Listings</div>
        <div className="browse-search">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
      
      <div className="filter-tabs-container">
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="browse-content">
        <div className="filters-panel">
          <h2 className="filters-title">Filters</h2>
          
          <div className="filter-section">
            <h3 className="filter-section-title">Price Range</h3>
            <div className="price-range-inputs">
              <span>$</span>
              <input 
                type="number" 
                className="price-input"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                placeholder="Min"
              />
              <span>-</span>
              <span>$</span>
              <input 
                type="number" 
                className="price-input"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                placeholder="Max"
              />
            </div>
            <input 
              type="range"
              min="0"
              max="500"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
              className="price-range-slider"
            />
          </div>

          <div className="filter-section">
            <h3 className="filter-section-title">Condition</h3>
            <div className="condition-checkboxes">
              {conditions.map((condition, index) => (
                <div key={index} className="checkbox-item">
                  <input 
                    type="checkbox"
                    id={condition}
                    checked={selectedConditions.includes(condition)}
                    onChange={() => handleConditionChange(condition)}
                  />
                  <label htmlFor={condition}>{condition}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="listings-section">
          <h2 className="listings-title">
            {activeTab === 'All Items' ? 'All Listings' : activeTab} ({filteredListings.length})
          </h2>
          <div className="listings-cards">
            {filteredListings.map((item, index) => (
              <div key={index} onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                <Card 
                  name={item.name} 
                  price={item.price} 
                  location={item.location} 
                  tag={item.tag} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ListingPopup 
        listing={selectedListing}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSave={handleSaveListing}
      />
    </div>
  );
}

export default Browse;
