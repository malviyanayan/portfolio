import "../css/education.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { useSelector } from "react-redux";

const Education = () => {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  const educationData = [
    {
      title: "B Tech",
      duration: "Aug 2021 – May 2025",
      institution: "University Institute of Technology, RGPV",
      details: "CGPA: 7.61/10",
      position: "left",
    },
    {
      title: "class 12th - MP Board",
      duration: "Apr 2020 – Apr 2021",
      institution: "Govt. Higher Secondary School",
      details: "Percentage: 90.4%",
      position: "right",
    },
    {
      title: "class 10th - MP Board",
      duration: "Apr 2018 – Apr 2019",
      institution: "Govt. High School",
      details: "Percentage: 90.6%",
      position: "left",
    },
  ];

  return (
    <div
      className={`education-wrapper ${
        theme ? "education-light" : "education-dark"
      }`}
    >
      {/* Title */}
      <FadeInOnScroll>
        <div className="education-section-title">
          <h2 className="section-title" style={{color : `${theme ? '#1a1a1a' : '#00f2fe'}`}}>Education</h2>
          <p>Currently – Undergraduate</p>
        </div>
      </FadeInOnScroll>

      {/* Timeline */}
      <section className="education-timeline">
        {educationData.map((edu, index) => (
          <FadeInOnScroll key={index}>
            <div className={`education-timeline-item ${edu.position}`}>
              <div className="education-card">
                <h3>{edu.title}</h3>
                <span>{edu.duration}</span>
                <p>
                  {edu.institution}
                  <br />
                  {edu.details}
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </section>
    </div>
  );
};

export default Education;
