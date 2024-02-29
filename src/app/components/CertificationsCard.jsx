import React from 'react'

const CertificationsCard = ({ category, items }) => {
  return (
    <div className="bg-bgColor rounded-lg shadow-2xl px-4 py-5 hover:scale-110 transition duration-200 ease-in-out">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-textColor">{category}</h3>
        </div>
        <ul className="list-disc mt-4 ml-4 text-textColor">
            {items.map((item) => (
            <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default CertificationsCard