import React from 'react'
import CertificationsCard from './CertificationsCard'

const certificationsData = [
    {
        category: "Category 1",
        items: [
        "Award 1", 
        "Award 2",
        "Award 3",
        "Award 4"
        ],
    },
    {
        category: "Category 2",
        items: [
        "Award 1", 
        "Award 2",
        "Award 3",
        "Award 4"
        ],
    },
    ];

const Certifications = () => {
    return (
        <section id="certifications" className="mb-16">
            <h2 className="text-textColor text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">Certifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                {certificationsData.map((certs) => (
                <CertificationsCard
                    key={certs.category}
                    {...certs}
                />
                ))}
            </div>
        </section>
    );
}

export default Certifications