import "./MayCarousel.scss"
import React, { useState, useEffect, useCallback } from 'react';
import data from "../../../data/data.json"
import MayCards from "../../common/cards/Maycards";

function MayCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPrevProject = () => {
    setCurrentProjectIndex(currentProjectIndex === 0 ? data.projets.length - 1 : currentProjectIndex - 1);
  };

  const goToNextProject = useCallback(() => {
    setCurrentProjectIndex(currentProjectIndex === data.projets.length - 1 ? 0 : currentProjectIndex + 1);
  }, [currentProjectIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextProject();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentProjectIndex, goToNextProject]);

    return (
      <div id="ProjetRealises" className="carousel-projet">        
        <div className="carousel-cards">
        <h2>Projets réalisés</h2>
          {data.projets.map((projet, index) => (
            <MayCards
              key={index}
              projet={projet}
              isActive={index === currentProjectIndex}
              goToPrevProject={goToPrevProject}
              goToNextProject={goToNextProject}
              target="_blank" 
              rel="noopener noreferrer" 
            />
          ))}
        </div>
      </div>
    );
  }
  export default MayCarousel;