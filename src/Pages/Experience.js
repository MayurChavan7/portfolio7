import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">S M V M Watur</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Secondary School Education
            <br />
            Persentage:92%
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            S M Jr college Watur
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Science Stream <br />
            Persentage:85%
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019-present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">B.tech</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pursuing B.tech in Electronics Engineering from VJTI,Mumbai.
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Achievements:</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Schilder Scolarship Holder which is organized by VJTI.<br></br>
            Stood 1st in 12th standard in Science Stream.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2022 - 10/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full stack development Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Intern as a full stack developer at Acmegrade.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06/2022 - 07/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Research Assistant: Worked as a Research Assistant
            and Developer under Dr. D. P. Rathod from VJTI Mumbai Developed a
            Movie Recommendation System Tech Stack - Python, Streamlit Library
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
