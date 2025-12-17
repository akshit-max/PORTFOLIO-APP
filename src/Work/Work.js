import React from "react";
import { SiReact, SiAmazonaws, SiMicrosoft } from "react-icons/si";
import { MdGroups } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Bounce } from "react-awesome-reveal";
import "react-vertical-timeline-component/style.min.css";
import "./Work.css";

const WorkExp = () => {
  return (
    <>
      <Bounce>
        <div className="work" id="work">
          <div className="container work-exp">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
              Campus Experience & Leadership
            </h2>
            <hr />
            <VerticalTimeline lineColor="#1e1e2c">
              
              {/* MLSA Role */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "#1e1e2c" }}
                contentArrowStyle={{ borderRight: "7px solid white" }}
                date="2024 - Present"
                iconStyle={{ background: "#3B82F6", color: "#fff" }}
                icon={<SiMicrosoft />}
              >
                <h3 className="vertical-timeline-element-title">DSA Coordinator</h3>
                <h4 className="vertical-timeline-element-subtitle">MLSA KIET</h4>
                <p>
                  Organizing coding contests, mentoring peers in Data Structures and Algorithms, 
                  and managing technical workshops for the student community.
                </p>
              </VerticalTimelineElement>

              {/* AWS Club Role */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "#1e1e2c" }}
                contentArrowStyle={{ borderRight: "7px solid white" }}
                date="2024 - Present"
                iconStyle={{ background: "#FF9900", color: "#fff" }}
                icon={<SiAmazonaws />}
              >
                <h3 className="vertical-timeline-element-title">Member</h3>
                <h4 className="vertical-timeline-element-subtitle">AWS Cloud Club KIET</h4>
                <p>
                  Participating in cloud computing bootcamps and collaborating on 
                  cloud-native projects using AWS services.
                </p>
              </VerticalTimelineElement>

              {/* NSS Role */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "#1e1e2c" }}
                contentArrowStyle={{ borderRight: "7px solid white" }}
                date="2024 - Present"
                iconStyle={{ background: "#10B981", color: "#fff" }}
                icon={<MdGroups />}
              >
                <h3 className="vertical-timeline-element-title">NSS Volunteer</h3>
                <h4 className="vertical-timeline-element-subtitle">NSS KIET</h4>
                <p>
                  Engaging in social welfare projects and community service initiatives 
                  organized by the National Service Scheme unit of KIET.
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
