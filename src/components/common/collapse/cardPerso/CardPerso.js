import './CardPerso.scss';
import portrait from '../../../../assets/img/may.jpg';
import data from '../../../../data/data.json';


function CardPerso() {
  const { nom, jobTitle, age, adresse, telephone, email, resume } = data;

  return (
    <div className="card">      
      <div className="card-content">
        <div className="card-image">
          <img src={portrait} alt={nom} />
        </div>
        <div className="card-info">
          <h1 className="card-title">{nom}</h1>
          <h2 className="card-subtitle">{jobTitle}</h2>
          <p className="card-subtitle">{age} ans</p>    
          <ul>
            <li className="info-item"><i class="fa fa-map-marker-alt"></i>{adresse}</li>
            <li className="info-item"><i class="fa fa-envelope"></i><a href={`mailto:${email}`}>{email}</a></li>
            <li className="info-item"><i class="fa fa-mobile-alt"></i><a href={`tel:${telephone}`}>{telephone}</a></li>
          </ul>  
        </div>    
        </div> 
      <div className="summary">
        <p className="card-text">{resume}</p>
        </div>
    </div>
  );
}

export default CardPerso;
