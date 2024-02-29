import React from "react";

const EducationCard = ({ schoolName, country, degree, dates, info }) => {
  return (
    <div className="bg-bgColor rounded-lg shadow-2xl px-4 py-5 hover:scale-110 transition duration-200 ease-in-out">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-textColor">{schoolName}</h3>
        <span className="text-primaryColor">{country}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="font-semibold text-textColor">{degree}</p>
        <span className="text-primaryColor">{dates}</span>
      </div>
      <ul className="list-disc mt-4 ml-4 text-textColor">
        {info.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
