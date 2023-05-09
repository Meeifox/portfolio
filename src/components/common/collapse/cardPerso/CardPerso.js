import './CardPerso.scss';
import portrait from '../../../../assets/img/may.jpg';
import data from '../../../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function CardPerso() {
  const { nom, jobTitle, age, adresse, telephone, email, resume } = data;
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleCardHover = () => {
    setIsCardHovered(true);
  };
  const handleCardLeave = () => {
    setIsCardHovered(false);
  };

  return (
    <div className={`card ${isCardHovered ? 'is-hovered' : ''}`} 
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >      
      <div className="card-content">
        <div className="card-image">
          <img src={portrait} alt={nom} />
        </div>
        <div>
          <h2 className="card-title">{nom}</h2>
          <p className="card-subtitle">{jobTitle}</p>
          <p className="card-subtitle">{age} ans</p>
        </div>
      
      <div className="card-footer">
        <ul className="card-info">
          <li className="info-item"><FontAwesomeIcon icon={faMapMarkerAlt} />{adresse}</li>
          <li className="info-item"><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${email}`}>{email}</a></li>
          <li className="info-item"><FontAwesomeIcon icon={faMobileAlt} /><a href={`tel:${telephone}`}>{telephone}</a></li>
        </ul>        
      </div>
      </div>
      <div className={`summary ${isCardHovered ? 'is-visible' : ''}`}><p className="card-text">{resume}</p></div>
    </div>
  );
}

export default CardPerso;
