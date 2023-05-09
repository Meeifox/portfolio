import React from 'react';
import './Formation.scss';
import formations from '../../data/data.json';

function Formation() {
  return (
    <section id='formation'>
      <h2>Formation</h2>
      {formations.formations.map((formation) => (
        <article key={formation.diplôme}>
          <h3>{formation.diplôme}</h3>
          <p>{formation.établissement}<br />
            {formation.date && `Obtenu en ${formation.date}`}
            {!formation.date && formation.statue}
          </p>
        </article>
      ))}
    </section>
  );
}

export default Formation;
