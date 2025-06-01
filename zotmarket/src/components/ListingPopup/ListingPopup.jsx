import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ListingPopup.css';

function ListingPopup({ listing, isOpen, onClose, onSave }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  // Mock images for now - in a real app these would come from the listing data
  const images = [
    '/api/placeholder/400/300',
    '/api/placeholder/400/301',
    '/api/placeholder/400/302'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleContactSeller = () => {
    onClose(); // Close the popup first
    navigate('/messages'); // Navigate to messages page
  };

  if (!isOpen || !listing) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <div className="popup-actions">
            <button className="save-btn" onClick={() => onSave(listing)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="popup-body">
          <div className="popup-images">
            <div className="image-container">
              <img 
                src={images[currentImageIndex]} 
                alt={`${listing.name} - ${currentImageIndex + 1}`}
                className="listing-image"
              />
              <button className="image-nav prev" onClick={prevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="image-nav next" onClick={nextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="image-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="popup-details">
            <h2 className="listing-title">{listing.name}</h2>
            <p className="listing-price">${listing.price}</p>
            <p className="listing-condition">Condition: {listing.tag}</p>
            <p className="listing-location">📍 {listing.location}</p>
            
            <div className="listing-description">
              <h3>Description</h3>
              <p>This is a great item in {listing.tag.toLowerCase()} condition. Perfect for students looking for quality items at affordable prices. Contact seller for more details or to arrange pickup.</p>
            </div>

            <div className="seller-info">
              <h3>Seller Information</h3>
              <div className="seller-details">
                <div className="seller-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="seller-text">
                  <p className="seller-name">Peter Anteater</p>
                  <p className="seller-rating">⭐ 4.8 (23 reviews)</p>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="contact-btn" onClick={handleContactSeller}>Contact Seller</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPopup;
