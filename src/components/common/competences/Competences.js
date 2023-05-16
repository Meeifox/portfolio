
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import data from '../../../data/data.json';
import './Competences.scss';

function Competences() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="card-soft-skill">
      <div className="content-soft-skill">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="box-soft-content">
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography variant="h6">Loisirs</Typography>
          </AccordionSummary>
          <AccordionDetails className="competence-box">            
                <ul>
                  {data['soft-skill']['hobbies'].map((hobby) => (
                    <li key={hobby}>{hobby}</li>
                  ))}
                </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="box-soft-content">
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography variant="h6">Personnalité</Typography>
          </AccordionSummary>
          <AccordionDetails className="competence-box-column">
            <ul>
              {data['soft-skill']['personality'].map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="box-soft-content">
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography variant="h6">Langues parlées</Typography>
          </AccordionSummary>
          <AccordionDetails className="competence-box-column">
            <ul>
              {data['soft-skill']['langage'].map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Competences;
