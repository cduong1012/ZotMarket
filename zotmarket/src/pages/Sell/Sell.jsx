import React, { useState } from 'react'
import '../../styles/Sell.css';

function Sell() {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        paymentOptions: [],
        condition: '',
        location: '',
        photos: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxMark = (e) => {
        const {name, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
                ? [...prev[name], value]
                : prev[name].filter(item => item !== value)
        }));
    };

    const handleSubmit = () => {
        console.log('Item posted!', formData);
    };

  return (
      <div>
      <div className = "Title"> Create your Listing </div>

        <div className = "form-container">
            <div>
                <div className = "input-form">
                    <label className = "required">Item Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="text-box"
                        type="text"
                        placeholder="Enter item name"
                    />
                </div>

                <div className="input-form">
                    <label className="required">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="select-box"
                    >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="Furniture">Furniture</option>
                        <option value="sports">Sports & Recreation</option>
                        <option value="shoes">Shoes</option>
                        <option value="textbooks">Textbooks</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="input-form">
                    <label className="required">Price</label>
                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="text-box"
                        type="number"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="input-form">
                    <label>Payment Options</label>
                    <div className="payment-options">
                        {['Cash', 'PayPal', 'Venmo', 'Zelle'].map(option => (
                            <label key={option} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="paymentOptions"
                                    value={option}
                                    checked={formData.paymentOptions.includes(option)}
                                    onChange={handleCheckboxMark}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

            </div>

            <div>
                <div className="input-form">
                    <label className="required">Condition</label>
                    <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="select-box"
                    >
                        <option value="">Select Condition</option>
                        <option value="new">New</option>
                        <option value="like-new">Like New</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                    </select>
                </div>

                <div className="input-form">
                    <label className="required">Location</label>
                    <input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="text-box"
                        type="text"
                        placeholder="City, State"
                    />
                </div>

                <div className="input-form">
                    <label>Photos</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="file-input"
                    />
                    <small className="file-help-text">Upload up to 3 photos!</small>
                </div>

            </div>

        </div>
          <div className="submit-container">
              <button onClick={handleSubmit} className="submit-button">
                  Submit Listing
              </button>
          </div>
      </div>

  );
}

export default Sell
