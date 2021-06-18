import React from 'react';

const NavBar = ({ switchView }) => {
  return (
    <nav>
      <table id="nav-table">
        <tr>
          <td onClick={switchView}>Home</td>
          <td onClick={switchView}>About</td>
        </tr>
      </table>
    </nav>
  );
};

export default NavBar;
