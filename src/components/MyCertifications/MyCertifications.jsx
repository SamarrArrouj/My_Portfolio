import React from "react";
import './MyCertifications.css';

// Importe les fichiers PDF de tes certifications
import pcapPdf from '../../assets/pcap.pdf';
import psm1Pdf from '../../assets/psm1.pdf';

const MyCertifications = () => {
    const certifications = [
        { name: "PCAP - Certified Associate Python Programmer", file: pcapPdf },
        { name: "PSM1 - Professional Scrum Master 1", file: psm1Pdf },
    ];

    return (
        <div className="about-certifications">
          <h2>My Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.file} 
                  download={cert.name.replace(/ /g, "_") + ".pdf"} 
                  className="cert-card-link"
                >
                  <div className="cert-card">
                    <p>{cert.name}</p>
                  </div>
                </a>
            ))}
          </div>
        </div>
    );
};

export default MyCertifications;
