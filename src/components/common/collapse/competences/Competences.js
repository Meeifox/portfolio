import React, { useState } from "react";
import data from "../../../../data/data.json";
import "./Competences.scss";

function Competences() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (sectionName) => {
    setActiveSection((prevSection) => {
      if (prevSection === sectionName) {
        return null;
      } else {
        return sectionName;
      }
    });
  };

  return (
    <div className="card-soft-skill">
      <div className="content-soft-skill">
        <div className="button-skill">
        <button onClick={() => handleClick("hobbies")}>Loisirs</button>
        <button onClick={() => handleClick("personality")}>Personnalité</button>
        <button onClick={() => handleClick("langage")}>Langues parlées</button>
        </div>
        {activeSection === "hobbies" && (
          <div className="text-skill">
            <ul>
              {data["soft-skill"]["hobbies"].map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "personality" && (
          <div className="text-skill">
            <ul>
              {data["soft-skill"]["personality"].map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "langage" && (
          <div className="text-skill">

            <ul>
              {data["soft-skill"]["langage"].map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Competences;
