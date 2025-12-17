import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { Zoom } from "react-awesome-reveal";

const Education = () => {
  return (
    <>
      <Zoom>
        <div className="boxerr">
          <div className="container boxer">
            <div className="education" id="Education">
              <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                Education Details
              </h2>
              <hr />
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "white", color: "#1f2937" }} // Changed color to dark gray
                  contentArrowStyle={{ borderRight: "7px solid white" }}
                  date="2024 - 2028"
                  iconStyle={{ background: "#3B82F6", color: "#fff" }}
                  icon={<MdSchool />}
                >
                  <h3 className="vertical-timeline-element-title">B.TECH</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    KIET GROUP OF INSTITUTIONS, GHAZIABAD
                  </h4>
                </VerticalTimelineElement>
              </VerticalTimeline> {/* Added missing closing tag */}
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Education;
