import React from "react";
import './MyWork.css';
import project1 from '../../assets/projet1.png';
import project2 from '../../assets/projet2.png';
import project3 from '../../assets/projet3.jpg';

const Mywork_data = [
    {
        w_no: 1,
        w_name: "Traditional Tunisian Recipes Web Application",
        w_desc: "A web application that allows users to access a rich database of traditional Tunisian recipes, accompanied by step-by-step video tutorials, share their own recipes with the community, whether traditional or innovative creations and order dishes published by partner restaurants.",
        w_img: project1,
        w_tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
        w_link: "https://github.com/SamarrArrouj/Food_Project"
    },
    {
        w_no: 2,
        w_name: "Gym Management System",
        w_desc: "A desktop application developed to streamline the daily operations of a fitness center. It enables efficient management of members, staff, schedules, and payments",
        w_img: project2,
        w_tech: ["C#"],
        w_link: "https://github.com/SamarrArrouj/GymManagementC-"
    },
    {
        w_no: 3,
        w_name: "AI-Powered Medical Diagnosis System",
        w_desc: "Designed and developed an intelligent system to assist in medical diagnosis using artificial intelligence. The platform provides healthcare professionals with reliable support for faster and more accurate diagnostic decisions.",
        w_img: project3,
        w_tech: [".Net", "Angular", "Flask"],
        w_link: "https://github.com/SamarrArrouj/Medial_System_Project"
    },
];

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My latest work</h1>
            </div>

            <div className="mywork-container">
                {Mywork_data.map((work, index) => (
                    <a 
                      key={index} 
                      href={work.w_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="work-card-link"
                    >
                        <div className="work-card">
                            <h2>{work.w_name}</h2><br />
                            <img src={work.w_img} alt={work.w_name} className="work-img" />
                            <p>{work.w_desc}</p>
                            <div className="work-tech">
                                {work.w_tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mywork-showmore">
                <p>Show more</p>
            </div>
        </div>
    );
};

export default MyWork;
