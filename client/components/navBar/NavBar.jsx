import React from 'react';

const NavBar = ({ switchView }) => {
  return (
    <nav>
      <li tabIndex="0" onClick={switchView}>Home</li>
      <li tabIndex="0" onClick={switchView}>About</li>
    </nav>
  );
};

export default NavBar;
