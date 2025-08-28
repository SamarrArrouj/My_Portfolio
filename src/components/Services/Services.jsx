import React from "react";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites with React, Laravel, Spring Boot, and more.",
    icon: "🌐",
  },
  {
    title: "Backend & APIs",
    description:
      "Designing RESTful APIs, managing databases, and implementing secure authentication (JWT, OAuth).",
    icon: "⚙️",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces with Tailwind CSS and adding smooth animations with Framer Motion.",
    icon: "🎨",
  },
  {
    title: "Mobile Applications",
    description: "Developing cross-platform apps with Android or Flutter.",
    icon: "📱",
  },
  {
    title: "DevOps & Deployment",
    description:
      "Containerization with Docker, CI/CD pipelines with GitHub Actions, and deploying on AWS.",
    icon: "☁️",
  },
];

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <p>
          Here are the main areas where I can help you bring your ideas to life 🚀
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
