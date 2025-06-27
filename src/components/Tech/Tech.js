import React from "react";
import "./Tech.css";

// import Fade from "react-reveal/Fade";
import { Fade, Zoom, Slide, Bounce, Rotate, LightSpeed} from "react-awesome-reveal";

import { TechList } from '../../utils/TechList'
const Techstack = () => {
  return (
    <>
      <div className="container techstack sss" id="techstack">
        <Rotate>
          <h2 className="col-12 mt-3 mb-1 text-center text-white text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center text-white">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        {/* </RubberBand> */}
        <div className="row">
          {TechList.map((tech) => (
            // <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
        ))}
        </div>
        </Rotate>
      </div>
    </>
  );
};

export default Techstack;