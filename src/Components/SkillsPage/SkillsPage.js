import React from 'react';
import {
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNpm,
} from 'react-icons/fa';
import {
  BsGit,
  BsGithub,
} from 'react-icons/bs'
import { 
  SiTypescript,
  SiReactrouter,
  SiGraphql,
  SiCypress,
  SiMocha,
  SiChai,
  SiVercel,
  SiPostman,
  SiSlack,
  SiHeroku
} from "react-icons/si";
import {
  TbBrandVscode,
} from "react-icons/tb";

import './SkillsPage.css'; 

const SkillsPage = () => {
  return (
    <div className="skills-container">
      <div className="skills-category">
        <h2>Programming Languages:</h2>
        <div className="skill-item">
          <FaJs color="#f7df1e" /> 
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <SiTypescript color="#1572b6" /> 
          <p>TypeScript</p>
        </div>
        <div className="skill-item">
          <FaHtml5 color="#e34f26" /> 
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FaCss3 color="#1572b6" /> 
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <SiGraphql color="purple" /> 
          <p>GraphQL</p>
        </div>
      </div>
      <div className="skills-category">
        <h2>Frameworks / Libraries / Testing:</h2>
        <div className="skill-item">
          <FaReact color="#61dafb" /> 
          <p>React</p>
        </div>
        <div className="skill-item">
          <SiReactrouter color="red" /> 
          <p>React Router</p>
        </div>
        <div className="skill-item">
          <FaNpm color="#cb3837" /> 
          <p>NPM</p>
        </div>
        <div className="skill-item">
          <SiCypress color="white" /> 
          <p>Cypress</p>
        </div><div className="skill-item">
          <SiMocha color="#8D6748" /> 
          <p>Mocha</p>
        </div><div className="skill-item">
          <SiChai color="#A30701"/> 
          <p>Chai</p>
        </div>
      </div>
      <div className="skills-category">
        <h2>Development Tools</h2>
        <div className="skill-item">
          <BsGit color="#f05032" /> 
          <p>Git</p>
        </div>
        <div className="skill-item">
          <BsGithub color="4078c0" /> 
          <p>Github</p>
        </div>
        <div className="skill-item">
          <TbBrandVscode color="#007ACC" /> 
          <p>VS Code</p>
        </div>
        <div className="skill-item">
          <SiVercel color="white" /> 
          <p>Vercel</p>
        </div> 
          <div className="skill-item">
          <SiHeroku color="#430098" /> 
          <p>Heroku</p>
        </div> 
          <div className="skill-item">
          <SiPostman color="#FF6C37" /> 
          <p>Postman</p>
        </div> 
          <div className="skill-item">
          <SiSlack color="#4A154B" /> 
          <p>Slack</p>
        </div>
      </div>
      <div className='skills-category'>
        <h2>Processes/Methodologies/Concepts</h2>
          <div className="skill-item">  
            <img src="https://img.shields.io/badge/OOP%20-EDD016.svg?&style=for-the-badge&logo=OOP&logoColor=black"/>
            <p>Object Oriented Programming</p>
          </div>

          <div className="skill-item">
            <img src="https://img.shields.io/badge/TDD%20-6EEE80.svg?&style=for-the-badge&logo=TDD&logoColor=black" alt="TDD" />
            <p>Test Driven Development</p>
          </div>

          <div className="skill-item">
            <img src="https://img.shields.io/badge/AGILE%20-2A82E2.svg?&style=for-the-badge&logo=AGILE&logoColor=white" alt="AGILE" />
            <p>Agile Methodologies</p>
          </div>

          <div className="skill-item">
            <img src="https://img.shields.io/badge/RESTful APIs%20-AD51E0.svg?&style=for-the-badge&logo=AGILE&logoColor=white" alt="RESTful APIs" />
            <p>Restful APIs</p>
          </div>

          <div className="skill-item">
            <img src="https://img.shields.io/badge/UX/UI%20-212224.svg?&style=for-the-badge&logo=AGILE&logoColor=white" alt="UX/UI" />
            <p>User Experience / User Interface</p>
          </div>

          <div className="skill-item">
            <img src="https://img.shields.io/badge/Responsive Design%20-CA4245.svg?&style=for-the-badge&logo=AGILE&logoColor=white" alt="Responsive Design" />
            <p>Responsive Design</p>
          </div>

          <div className="skill-item">
            <img src="https://img.shields.io/badge/Accessibility%20-FFFFFF.svg?&style=for-the-badge&logo=AGILE&logoColor=black" alt="Accessibility" />
            <p>Accessibility</p>
          </div>

      </div>
    </div>
  );
};

export default SkillsPage;

