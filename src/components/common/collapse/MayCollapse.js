import React, { useState } from 'react';
import './MayCollapse.scss';

/**
La fonction Collapse est un composant qui représente une section de texte qui peut être réduite ou agrandie en cliquant sur un bouton (ici button).
@param {*} props - les propriétés passées au composant, qui contiennent le titre et le contenu de la section.
@returns - le composant Collapse qui affiche le titre et le contenu de la section, ainsi qu'un bouton type open/close pour réduire ou agrandir la section.
*/
function MayCollapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction pour changer l'état de isOpen
  function toggle() {
    setIsOpen(!isOpen);
  }
  
  // Définition de la classe CSS en fonction de l'état d'ouverture ou de fermeture du composant
  const buttonClassName = isOpen ? 'collapse__button button' : 'collapse__button button-closed';
  const boxClassName = isOpen ? 'collapse__box  box' : 'collapse__box box-closed'
  return (
    <div className='collapse'>
   <button className={buttonClassName} onClick={toggle} >
    <h2>{props.title}</h2>
    </button>
    {<div className={boxClassName} onClick={toggle}>{props.children}</div>}
    </div>
   );
}

export default MayCollapse;

