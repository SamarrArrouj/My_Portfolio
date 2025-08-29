
import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const handleClick = (section) => {
    setMenu(section);
    setOpen(false); 
  };

  return (
    <nav className='navbar'>
      <div className="nav-logo">Samar Arrouj</div>

      {/* Menu classique */}
      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li>
          <AnchorLink className={`anchor-link ${menu === "home" ? "active" : ""}`} offset={50} href='#home'>
            <p onClick={() => handleClick("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "about" ? "active" : ""}`} offset={50} href='#about'>
            <p onClick={() => handleClick("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "services" ? "active" : ""}`} offset={50} href='#services'>
            <p onClick={() => handleClick("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "work" ? "active" : ""}`} offset={50} href='#work'>
            <p onClick={() => handleClick("work")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className={`anchor-link ${menu === "contact" ? "active" : ""}`} offset={50} href='#contact'>
            <p onClick={() => handleClick("contact")}>Contact</p>
          </AnchorLink>
        </li>
        <li className="nav-connect-mobile">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => handleClick("contact")}
          >
            Connect With Me
          </AnchorLink>
        </li>
      </ul>

      {/* Menu burger */}
      <div className="burger" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Menu connect pour desktop */}
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
    </nav>
  );
};

export default Navbar;
