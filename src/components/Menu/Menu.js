import React from 'react';
import './Menu.css';
import { FaHome } from "react-icons/fa";
import { FcAbout, FcGraduationCap, FcServices, FcBusinessman, FcSupport, FcPhone } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";

const Menu = ({ toggle }) => {
  return (
    <>
      {!toggle ? (
          
        <Zoom>
          <div className='major'>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                      <FaHome title='Home' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                      <FcAbout title='About' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>
                      <FcBusinessman title='Education' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={100}>
                      <FcGraduationCap title='Experience' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                      <FcServices title='Tech Stack' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                      <FcSupport title='Projects' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <div className='flexer'>
                    <Link to="Contact" spy={true} smooth={true} offset={-100} duration={100}>
                      <FcPhone title='Contact' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      ) : (
        <Zoom>
          <div className='navbar-profile-pic '>
            <img src="/my.jpg" alt="profile-pic" className='about-boxx' />

            {/* Full Sidebar with text */}
            {[
              { icon: <FaHome />, label: 'Home', to: 'home' },
              { icon: <FcAbout />, label: 'About', to: 'about' },
              { icon: <FcBusinessman />, label: 'Education', to: 'education' },
              { icon: <FcGraduationCap />, label: 'Experience', to: 'skills' },
              { icon: <FcServices />, label: 'Tech Stack', to: 'techstack' },
              { icon: <FcSupport />, label: 'Projects', to: 'projects' },
              { icon: <FcPhone />, label: 'Contact', to: 'Contact' },
            ].map((item, index) => (
              <div className="nav-items" key={index}>
                <div className="nav-item">
                  <div className="nav-link">
                    <div className='flexerr'>
                      <Link to={item.to} spy={true} smooth={true} offset={-100} duration={100} className='d-flex align-items-center gap-2' style={{ textDecoration: 'none' }}>
                        <div>{item.icon}</div>
                        <div><p>{item.label}</p></div>
                      </Link>
                    </div>
                
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      
      )}
    </>
  );
};

export default Menu;
