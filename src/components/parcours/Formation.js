import React from 'react';
import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { TimelineSeparator } from '@mui/lab'; // Remove the duplicated import statement
import './Formation.scss';
import formations from '../../data/data.json';

function Formation() {
  return (
    <div className="formation-container">
      <h2>Formation</h2>
      <Timeline>
        {formations.formations.map((formation) => (
          <TimelineItem key={formation.diplôme}>
            <TimelineOppositeContent>
              <Typography className="date-formation" component="p">
              {formation.date ? `Obtenu en ${formation.date}` : formation.statue}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className="formation-timeline">
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className="formation-title" component="h3">{formation.diplôme}</Typography>
              <Typography className="formation-place" component="p">
                {formation.établissement}<br />                
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Formation;
