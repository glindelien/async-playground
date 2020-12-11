import React from 'react';

const SubmitZipCode = ({ handleInputChange, zipCode }) => (
  <div class="submit-zip">
    <form>
      <label>
        Zip Code&nbsp;&nbsp;
      <input type="number"
             name="zipCode"
             onChange={handleInputChange}
             value={zipCode} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default SubmitZipCode;
