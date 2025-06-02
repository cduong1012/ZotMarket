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

        <div className = "Form-Container">
            <div className="form-columns">
                <div className="form-column">

                    <div className="input-form">
                        <label>Item Title</label>
                        <input className="text-box" type="text" placeholder="input name"/>
                    </div>

                    <div className="input-form">
                        <label>Category</label>
                    </div>

                    <div className="input-form">
                        <label>Price</label>
                    </div>

                    <div className="input-form">
                        <label>Payment Options</label>
                    </div>
                </div>

                <div className="form-column">
                    <div className="input-form">
                        <label>Condition</label>
                    </div>

                    <div className="input-form">
                        <label>Location</label>
                    </div>

                    <div className="input-form">
                        <label>Photos</label>
                    </div>

                </div>
            </div>

        </div>
      </div>

  )
}

export default Sell
