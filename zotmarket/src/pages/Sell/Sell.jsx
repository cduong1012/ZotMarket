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

            </div>

        </div>
      </div>

  )
}

export default Sell
