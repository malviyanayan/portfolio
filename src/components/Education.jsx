import '../css/education.css';

const Education = () => {
  const educationData = [
    {
      title: 'Bachelor of Technology in CSE',
      duration: 'Aug 2021 – May 2025',
      institution: 'University Institute of Technology, RGPV',
      details: 'CGPA: 8.5/10',
      position: 'left',
    },
    {
      title: '12th - Science Stream',
      duration: 'Apr 2020 – Apr 2021',
      institution: 'Govt. Higher Secondary School',
      details: 'Percentage: 85%',
      position: 'right',
    },
    {
      title: '10th Board',
      duration: 'Apr 2018 – Apr 2019',
      institution: 'Govt. High School',
      details: 'Percentage: 89%',
      position: 'left',
    },
  ];

  return (
    <>
      <div className="education-section-title">
        <div className="education-bar"></div>
        <h2>Education</h2>
        <p>Currently – Undergraduate</p>
      </div>

      <section className="education-timeline">
        {educationData.map((edu, index) => (
          <div className={`education-timeline-item ${edu.position}`} key={index}>
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
        ))}
      </section>
    </>
  );
};

export default Education;
