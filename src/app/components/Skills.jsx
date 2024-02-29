import React from "react";
import SkillsCard from "./SkillsCard";

const skillsData = [
    {
      category: "Front-end Development",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      category: "Back-end Development",
      items: ["Node.js", "Express.js", "Python", "Django","Node.js", "Express.js", "Python", "Django","Node.js", "Express.js", "Python", "Django"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="mb-16">
            <h2 className="text-textColor text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">Skills</h2>
            <div className="grid grid-cols-1 gap-4 mt-8">
                {skillsData.map((skills) => (
                <SkillsCard
                    key={skills.category}
                    {...skills}
                />
                ))}
            </div>
        </section>
    );
}

  
  export default Skills;