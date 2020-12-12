import React from 'react';

const SubmitZipCode = ({ handleInputChange, handleSubmit, zipCode }) => (
  <div className="submit-zip">
    <form id="zip" onSubmit={handleSubmit}>
      <label>
        AQI by Zip Code:&nbsp;&nbsp;
      <input type="text"
             name="zipCode"
             id="zipCode"
             onChange={handleInputChange}
             value={zipCode} />
      </label>
      <button type="submit" value="Submit" form="zip" id="submit">&#10148;</button>
    </form>
  </div>
);

export default SubmitZipCode;
