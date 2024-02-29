import React from "react";
import EducationCard from "./EducationCard";

const WorkExperienceData = [
    {
        schoolName: "Software Engineer", //this is the job position - reusing the EducationCard component so need same keys
        country: "USA",
        degree: "Company Name",          //this is the company name - reusing the EducationCard component so need same keys
        dates: "2018 - 2022",
        info: [
        "Completed task 1 with 100% accuracy and 2 days ahead of schedule",
        "Developed task 2 which resulted in a 50% increase in productivity",
        "Completed task 1 with 100% accuracy and 2 days ahead of schedule",
        "Developed task 2 which resulted in a 50% increase in productivity"
        ],
    },
    {
        schoolName: "Software Engineer",
        country: "USA",
        degree: "Company Name",
        dates: "2018 - 2022",
        info: [
            "Completed task 1 with 100% accuracy and 2 days ahead of schedule",
            "Developed task 2 which resulted in a 50% increase in productivity",
            "Completed task 1 with 100% accuracy and 2 days ahead of schedule",
            "Developed task 2 which resulted in a 50% increase in productivity"
            ],
    },
    {
        schoolName: "Software Engineer",
        country: "USA",
        degree: "Company Name",
        dates: "2018 - 2022",
        info: [
            "Completed task 1 with 100% accuracy and 2 days ahead of schedule",
            "Developed task 2 which resulted in a 50% increase in productivity",
            "Completed task 1 with 100% accuracy and 2 days ahead of schedule",
            "Developed task 2 which resulted in a 50% increase in productivity"
            ],
    }
];

const WorkExperience = () => {
    return (
        <section id="workExperience" className="mb-16">
            <h2 className="text-textColor text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">Work Experience</h2>
            <div className="grid grid-cols-1 gap-4 mt-8">
                {WorkExperienceData.map((workExperience) => (
                <EducationCard
                    key={workExperience.schoolName}
                    {...workExperience}
                />
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;