import React from "react";
import "./About.css";

// Assets
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import php from "../../assets/php.png";
import csharp from "../../assets/csharp.png";
import samar from "../../assets/samar.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import dotnet from "../../assets/dotnet.png";
import angular from "../../assets/angular.png";
import spring from "../../assets/spring.png";
import laravel from "../../assets/laravel.png";
import express from "../../assets/express.png";
import tailwind from "../../assets/tailwind.png";
import git from "../../assets/git.png";
import linux from "../../assets/linux.png";
import docker from "../../assets/docker.png";

const About = () => {
  // Tableaux organisés avec {src, name}
  const programmingLanguages = [
    { src: python, name: "Python" },
    { src: java, name: "Java" },
    { src: js, name: "JavaScript" },
    { src: php, name: "PHP" },
    { src: csharp, name: "C#" },
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
  ];

  const frameworksAndLibraries = [
    { src: react, name: "React" },
    { src: node, name: "Node.js" },
    { src: dotnet, name: ".NET" },
    { src: spring, name: "Spring Boot" },
    { src: angular, name: "Angular" },
    { src: laravel, name: "Laravel" },
    { src: express, name: "Express.js" },
    { src: tailwind, name: "Tailwind CSS" },
  ];

  const devOpsAndTools = [
    { src: git, name: "Git" },
    { src: linux, name: "Linux" },
    { src: docker, name: "Docker" },
  ];

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-intro">
        <div className="about-left">
          <img src={samar} alt="Samar" />
        </div>
        <div className="about-right">
          <p>
            I am a passionate Full Stack Developer with extensive experience in
            building modern, responsive, and user-friendly web applications. I
            specialize in both frontend and backend development, working with
            technologies such as React, Laravel, Spring Boot, and Node.js. I am
            deeply committed to creating intuitive UI/UX designs, optimizing
            performance, and delivering scalable solutions.
          </p>
          <p>
            I thrive in fast-paced environments and adapt quickly to new
            challenges. With strong communication and multitasking skills, I
            effectively manage multiple projects while continuously learning and
            growing. My goal is to bring ideas to life through clean, efficient
            code and innovative solutions that make a real impact.
          </p>
        </div>
      </div>

      <div className="about-skills">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            {programmingLanguages.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.src} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks and Libraries</h3>
          <div className="skills-list">
            {frameworksAndLibraries.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.src} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>DevOps and Tools</h3>
          <div className="skills-list">
            {devOpsAndTools.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.src} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
