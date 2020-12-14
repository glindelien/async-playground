import React from 'react';

const AddLocation = ({ handleInputChange, addLocation, zipCode }) => (
  <div className="input-submit">
    <form id="zip" onSubmit={addLocation}>
      <label>
        AQI by Zip Code:&nbsp;&nbsp;
      <input type="text"
             name="zipCode"
             onChange={handleInputChange}
             value={zipCode} />
      </label>
      <button type="submit" value="Submit" form="zip">&#10148;</button>
    </form>
  </div>
);

export default AddLocation;
