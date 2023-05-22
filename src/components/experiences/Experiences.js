import experiences from '../../data/data.json'
import './Experiences.scss'

function Experiences(){
        return (
          <div className='experiences-container'>
            <h2>Experiences</h2>
            {experiences.experiences.map((experiences) => (
              <article key={experiences.titre}>
                <h3>{experiences.entreprise}</h3>
                <p>{experiences.periode}<br />
                <div>{experiences.description}</div> 
                </p>
              </article>
            ))}
          </div>
        );
}

export default Experiences;
