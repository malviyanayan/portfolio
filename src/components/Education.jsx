import "../css/education.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in CSE",
      duration: "Aug 2021 – May 2025",
      institution: "University Institute of Technology, RGPV",
      details: "CGPA: 7.55/10",
      position: "left",
    },
    {
      title: "12th - Science Stream",
      duration: "Apr 2020 – Apr 2021",
      institution: "Govt. Higher Secondary School",
      details: "Percentage: 90.4%",
      position: "right",
    },
    {
      title: "10th Board",
      duration: "Apr 2018 – Apr 2019",
      institution: "Govt. High School",
      details: "Percentage: 90.6%",
      position: "left",
    },
  ];

  return (
    <>
      <FadeInOnScroll>
        <div className="education-section-title">
  <h2 className="section-title">Education</h2>
  <p>Currently – Undergraduate</p>
</div>

      </FadeInOnScroll>

      <section className="education-timeline">
        {educationData.map((edu, index) => (
          <FadeInOnScroll>
            <div
              className={`education-timeline-item ${edu.position}`}
              key={index}
            >
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
    </>
  );
};

export default Education;
