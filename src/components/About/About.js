import React from 'react';
import './About.css';
import { Fade, Zoom, Slide, Bounce, Rotate, LightSpeed} from "react-awesome-reveal";

const About = () => {
  return (
    <Zoom>
        
    <div className="container py-5" id="about">
      <div className="about-box">
        <div className="row align-items-center">
          
          {/* Left: Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0 ">
            <img
              src="my.jpg"
              alt="About"
              className="img-fluid rounded-3 shadow"
              style={{ maxWidth: '70%' }}
            />
          </div>

          {/* Right: Text */}
          <div className="col-md-6">
            <h2 className="mb-3">About Me</h2>
            <p className="fs-5 ttt">
              I'm a passionate <strong>FullStack Developer</strong> focused on building modern, scalable web
              applications using the <strong>MERN stack</strong>. I love creating elegant UI and writing clean, maintainable code.
            </p>
            <p className="fs-5">
              Currently exploring <strong>DevOps</strong> and sharpening my <strong>Data Structures & Algorithms</strong> for
              top tech company placements.
            </p>
            <p className="fs-5">
              Outside of coding, I enjoy UI/UX design, gaming, and contributing to open-source.
            </p>
          </div>

        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default About;
