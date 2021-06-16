import React from 'react';

const NavBar = ({ switchView }) => {
  return (
      <table id="nav-table">
        <tr>
          <td onClick={switchView}>Home</td>
          <td onClick={switchView}>About</td>
        </tr>
      </table>
  );
};

export default NavBar;
