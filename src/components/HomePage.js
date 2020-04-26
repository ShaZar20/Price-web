import React from 'react';

const HomePage = () => (
    <div className="centeral-box">
        <div>Free Price Tracker for Amazon, FlipKart & more</div>
        <div className="input-box">
            <input
                type="text"
                placeholder= "Enter Product Link of Any Supported Store"
            />
            <button className="check-button">CHECK</button>
        </div>
    </div>
);

export default HomePage;