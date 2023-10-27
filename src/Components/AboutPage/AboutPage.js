import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import './AboutPage.css';
import aboutData from '../../Data/aboutData';

const AboutPage = () => {
  const [sections, setSections] = useState(aboutData);

  const toggleSection = (index) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      expanded: index === i ? !section.expanded : false,
    }));
    setSections(updatedSections);
  };

  return (
    <div className="about-page">
      {sections.map((section, index) => (
        <div key={index} className={`section ${section.expanded ? 'expanded' : ''}`}>
          <div
            className="section-header"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <div className={`expander ${section.expanded ? 'open' : ''}`}>
              {section.expanded ? <FaAngleDown /> : <FaAngleRight />}
            </div>
          </div>
          <div className={`section-content ${section.expanded ? 'active' : ''}`}>
            {section.expanded && section.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;











