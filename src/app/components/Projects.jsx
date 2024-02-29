import React from "react";
import ProjectsCard from "./ProjectsCard";

const projectData = [
    {
      name: "Project Name",
      info: ["Task 1", 
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5",
            "Task 6"
        ],
      skills: ["Skill 1", "Skill 2","Skill 3 ","Skill 4"],
      github: "https://www.google.com/", // Optional - just make it "" if you want no github link
    },
    {
        name: "Project Name",
        info: ["Task 1", 
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5",
            "Task 6"
        ],
        skills: ["Skill 1", "Skill 2","Skill 2","Skill 2"],
        github: "",
    },
    {
      name: "Project Name",
      info: ["Task 1", 
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5",
            "Task 6"
        ],
      skills: ["Skill 1", "Skill 2","Skill 3 ","Skill 4"],
      github: "https://www.google.com/",
    },
    {
        name: "Project Name",
        info: ["Task 1", 
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5",
            "Task 6"
        ],
        skills: ["Skill 1", "Skill 2","Skill 2","Skill 2"],
        github: "",
    }
  ];

const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-textColor text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-4 mt-8">
        {projectData.map((projects) => (
        <ProjectsCard
            key={projects.name}
            {...projects}
        />
        ))}
      </div>
    </section>
  );
};

export default Projects;
