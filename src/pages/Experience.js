import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import myLogo from "../assets/react.svg";
import StarIcon from "@material-ui/icons/Star";

function Experience() {
  return (
    <div className="Experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Anurag University , Aushapur Ghatkesar
          </h3>
          <p>Mechanical Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CMR Technical Campus , Medchal
          </h3>
          <h4>Bachelor's Degree</h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2024"
          iconStyle={{ background: "yellow", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-end Developer(intern) - Kenoxis Anti-virus
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lucknow , Uttar Pradesh
          </h4>
          <p>
            Helped the team launch 2 major features by working in the front
            end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="2021 - 2024"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img className="logo" src={myLogo} alt="myLogo" />}
        >
          <h3 className="vertical-timeline-element-title">
            chatApp - Mern-stack
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Skills - Reactjs, HTML5, CSS3.
          </h4>
          <p>A website for people interact and communicate with each other.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="2021 - 2024"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img className="logo" src={myLogo} alt="myLogo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Blog-site - ReactJs
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Skills - Reactjs, HTML5, CSS3, MongDB.
          </h4>
          <p>
            A site where people can blog every wonderful things in their life.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
