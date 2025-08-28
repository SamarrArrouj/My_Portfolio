import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li>
          <AnchorLink className={`anchor-link ${menu === "home" ? "active" : ""}`} offset={50} href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "about" ? "active" : ""}`} offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "services" ? "active" : ""}`} offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "work" ? "active" : ""}`} offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "contact" ? "active" : ""}`} offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
     <div className="nav-connect">
  <AnchorLink
    className={`anchor-link ${menu === "contact" ? "active" : ""}`}
    offset={50}
    href="#contact"
    onClick={() => setMenu("contact")}
  >
    Connect With Me
  </AnchorLink>
</div>
    </div>
  );
};

export default Navbar;
