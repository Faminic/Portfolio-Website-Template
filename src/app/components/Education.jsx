import React from "react";
import EducationCard from "./EducationCard";

const educationData = [
  {
    schoolName: "University of Example",
    country: "USA",
    degree: "Bachelor of Science in Computer Science",
    dates: "2018 - 2022",
    info: [
      "Relevant coursework: Machine Learning, Software Engineering, Algorithms",
      "Graduated with honors (Dean's List)",
    ],
  },
  {
    schoolName: "University of Example",
    country: "USA",
    degree: "Bachelor of Science in Computer Science",
    dates: "2018 - 2022",
    info: [
      "Relevant coursework: Machine Learning, Software Engineering, Algorithms",
      "Graduated with honors (Dean's List)",
      "Relevant coursework: Machine Learning, Software Engineering, Algorithms",
      "Graduated with honors (Dean's List)"
    ],
  },
  {
    schoolName: "University of Example",
    country: "USA",
    degree: "Bachelor of Science in Computer Science",
    dates: "2018 - 2022",
    info: [
      "Relevant coursework: Machine Learning, Software Engineering, Algorithms",
      "Graduated with honors (Dean's List)",
      "Relevant coursework: Machine Learning, Software Engineering, Algorithms",
      "Graduated with honors (Dean's List)",
      "Relevant coursework: Machine Learning, Software Engineering, Algorithms"
    ],
  }
];

const Education = () => {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-textColor text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">Education</h2>
      <div className="grid grid-cols-1 gap-4 mt-8">
        {educationData.map((education) => (
          <EducationCard
            key={education.schoolName}
            {...education}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
