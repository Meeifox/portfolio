import './Maycards.scss';

function Maycards(props) {
    const { projet, isActive, goToPrevProject, goToNextProject } = props;
  
    const cardStyle = {
      display: isActive ? 'flex' : 'none',
    }
  
    return (
      <div className="maycards" style={cardStyle}>
        <div className="card-content">
          <h3>{projet.nom}</h3>
          <div className="image-projet">
          <img src={projet.img} alt={projet.nom}/>
          </div>
          <p>{projet.description}</p>
          <p><strong>Technologies :</strong> {projet.technologies.join(', ')}</p>
          <a href={projet.lien}>Lien vers le projet</a>
        </div>
        <div className="card-controls">
          <button className="prev" onClick={goToPrevProject}>Prev</button>
          <button className="next" onClick={goToNextProject}>Next</button>
        </div>
      </div>
    );
  }
export default Maycards;

