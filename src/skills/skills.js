import React from 'react';
import './skills.css';
import { Fade, Zoom, Slide, Bounce, Rotate, LightSpeed} from "react-awesome-reveal";

const Skills = () => {
  return (
    <Zoom>
    <div className="container skills-section my-5" id="skills">
      <h2 className="text-center mb-4">My Skills</h2>

      <div className="skill">
        <span>HTML</span>
        <div className="skill-bar">
          <div className="skill-level html">90%</div>
        </div>
      </div>

      <div className="skill">
        <span>CSS</span>
        <div className="skill-bar">
          <div className="skill-level css">85%</div>
        </div>
      </div>

      <div className="skill">
        <span>JavaScript</span>
        <div className="skill-bar">
          <div className="skill-level js">80%</div>
        </div>
      </div>

      <div className="skill">
        <span>React</span>
        <div className="skill-bar">
          <div className="skill-level react">75%</div>
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default Skills;
