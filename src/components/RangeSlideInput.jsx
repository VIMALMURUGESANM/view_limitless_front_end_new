// client/src/components/RangeSliderInput.js
import React, { useState } from 'react';
import axios from 'axios';

const RangeSliderInput = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/data', { sliderValue });
      console.log('Data saved:', response.data);
      // Optionally, you can handle success or show a success message
    } catch (error) {
      console.error('Error saving data:', error);
      // Optionally, you can handle errors or show an error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="slider">Slider Value:</label>
        <input
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>{sliderValue}</span>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RangeSliderInput;
