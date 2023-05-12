
import competences from '../../../data/data.json';
import './CompetencesDev.scss';

const CompetencesInformatique = () => {
  return (
    <div className='cometence-dev-body'>
  <h2>Compétences en développement</h2>
    <div className="competences">      
      {competences.competences.map((competence) => (
        <div
          className="competence"
          data-niveau={competence.niveau}
          key={competence.nom}
        >
          <p className='logo-name'>{competence.nom}</p>
          {competence.niveau}<br />          
          <div className="logo" dangerouslySetInnerHTML={{ __html: competence.logo }} />
          <span>ver. {competence.version}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CompetencesInformatique;