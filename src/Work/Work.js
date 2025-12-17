import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Fade, Zoom, Slide, Bounce, Rotate, LightSpeed} from "react-awesome-reveal";
import "react-vertical-timeline-component/style.min.css";
import "./Work.css";

const WorkExp = () => {
  return (
    <>
    <Bounce>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#3B82F6", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                DSA Coordinator
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                MLSA KIET
              </h4>
              <p>
                Leading technical workshops, mentoring students in problem-solving, 
                and coordinating coding contests for the campus community.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#3B82F6", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                NSS Volunteer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                NSS KIET
              </h4>
              <p>
                Managing community outreach programs, organizing blood donation camps, 
                and leading team-based social welfare initiatives.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#3B82F6", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Member
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                AWS Cloud Club KIET
              </h4>
              <p>
                Collaborating on cloud projects, exploring AWS infrastructure, 
                and participating in cloud computing technical sessions.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      </Bounce>
    </>
  );
};

export default WorkExp;
