import React, { useState } from 'react';
import './Layout.css';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Menu from './Menu/Menu';

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  const changer = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <div className="sidebar-section about-boxx ">
          <div className="toggle-btn">
            <FaArrowCircleLeft className="arrow" onClick={changer} />
          </div>
          {/* <div className="photo">
            <img src="my.jpg" alt="profile-photo" />
          </div> */}
          <div className="sample">
            <Menu toggle={toggle} />
          </div>
        </div>  
      ) : (
        <div className="sidebar-section-close about-boxx ">
          <div className="toggle-btn-close">
            <FaArrowCircleRight className="arrow-close" onClick={changer} />
          </div>
          {/* Optional: Add photo when sidebar is closed */}
          {/* <div className="photo-close">
            <img src="my.jpg" alt="profile-photo" />
          </div> */}
          <div className="sample-close">
            <Menu toggle={toggle} />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
