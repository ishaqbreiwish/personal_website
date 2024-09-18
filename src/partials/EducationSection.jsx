import React from 'react';

const EducationSection = () => {
  const educationInfo = {
    school: "Georgia Institute of Technology",
    degree: "Bachelor of Science (BS) in Computer Science",
    graduation: "Expected Graduation: May 2026",
    gpa: "Major GPA: 4.0/4.0"
  };

  const coursework = [
    { name: "Data Structures and Algorithms", icon: "</>" },
    { name: "Object-Oriented Programming", icon: "</>" },
    { name: "Intro to Artificial Intelligence", icon: "</>" },
    { name: "Linear Algebra", icon: "+" },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-content">
          <div className="education-info">
            <h2>Education</h2>
            <ul>
              <li>{educationInfo.school}</li>
              <li>{educationInfo.degree}</li>
              <li>{educationInfo.graduation}</li>
              <li>{educationInfo.gpa}</li>
            </ul>
          </div>
          <div className="coursework">
            <h2>Coursework</h2>
            <div className="course-grid">
              {coursework.map((course, index) => (
                <div key={index} className="course-item">
                  <span className={course.icon === "+" ? "math-icon" : "code-icon"}>
                    {course.icon}
                  </span>
                  <p>{course.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;