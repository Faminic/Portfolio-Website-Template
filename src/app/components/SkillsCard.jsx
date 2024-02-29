import React from "react";

const SkillsCard = ({ category, items }) => {
  return (
    <div className="bg-bgColor rounded-lg shadow-2xl px-4 py-5 hover:scale-110 transition duration-200 ease-in-out">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-textColor">{category}</h3>
        </div>
        <div className="flex flex-row mt-4 flex-wrap gap-x-3 gap-y-4">
            {items.map((item) => (
            <span
            key={item}
            className="bg-secondaryColor text-textColor rounded-full shadow-2xl px-4 py-1 text-center text-sm font-medium hover:scale-110 transition duration-100 ease-in-out"
            >
            {item}
            </span>
            ))}
        </div>
    </div>
  );
};

export default SkillsCard;