import React from "react";
import github_icon from "../../../public/assets/github.svg";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ name, info, skills, github }) => {
return (
    <div className="bg-bgColor rounded-lg shadow-2xl px-4 py-5 hover:scale-110 transition duration-200 ease-in-out">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-textColor">{name}</h3>
            <div className="flex flex-row gap-2 mt-4">
                {github && (
                    <Link href={github} target="_blank" rel="noreferrer noopener" className="hover:scale-125 transition duration-100 ease-in-out">
                        <Image src={github_icon} alt="Github" width={30} height={30} />
                    </Link>
                )}
            </div>
        </div>
        <ul className="list-disc mt-4 ml-4 text-textColor">
            {info.map((item) => (
            <li key={item}>{item}</li>
            ))}
        </ul>
        <div className="flex flex-row mt-4 flex-wrap gap-x-3 gap-y-4">
            {skills.map((skill) => (
            <span
            key={skill}
            className="bg-secondaryColor text-textColor rounded-full shadow-2xl px-4 py-1 text-center text-sm font-medium hover:scale-110 transition duration-100 ease-in-out"
            >
            {skill}
            </span>
            ))}
        </div>
    </div>
  );
};

export default ProjectsCard;