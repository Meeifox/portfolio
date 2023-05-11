import React from 'react';
import './Formation.scss';
import formations from '../../data/data.json';

function Formation() {
  return (
    <div className='formation-container'>
      <h2>Formation</h2>
      {formations.formations.map((formation) => (
        <article key={formation.diplôme}>
          <h3>{formation.diplôme}</h3>          
          <p>{formation.periode}<br />
          {formation.établissement}<br />            
            {formation.date && `Obtenu en ${formation.date}`}
            {!formation.date && formation.statue}
          </p>
        </article>
      ))}
    </div>
  );
}

export default Formation;
