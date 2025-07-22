import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      <div className="logo">LogicLayer</div>

      <div className="search">
        <img src="/src/assets/saerch.png" alt="" />
        <input type="text" placeholder="Search..." />
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <img src="/src/assets/twitter-fill 1.png" alt="twitter" />
       <img src="/src/assets/instagram-fill 1.png" alt="instagram" />
       <img src="/src/assets/linkedin-box-fill 1.png" alt="linkedin" />
      </nav>
    </header>

  );
};








export default Navbar;
