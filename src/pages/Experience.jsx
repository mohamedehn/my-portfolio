import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {

    return(
        <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2008 - 2010"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              High School Diploma, Léonard de Vinci, Villefontaine, France
            </h3>
            <p> High School Diploma Marketing</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2012"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Claude Bernard University, Lyon, France
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
            BTEC Higher National Diploma
            </h4>
  
            <p> Commercial and Business</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2019"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              CFPB Center, Lyon, France
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
            BA, BS/BSc
            </h4>
  
            <p> Banking</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              OpenclassRooms, Lyon, France
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
            BTEC Higher National Diploma
            </h4>
  
            <p> Computer Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2017"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Customer service representative - Caisse d'Epargne
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bourgoin-Jallieu, France
            </h4>
            <p>Client management for a Bank.</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2020"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Business customer service representative - Caisse d'Epargne
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lyon, France
            </h4>
            <p>Business client management for a Bank.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bank Director - Caisse d'Epargne
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lyon, France
            </h4>
            <p>Employees management for a Bank.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }

export default Experience