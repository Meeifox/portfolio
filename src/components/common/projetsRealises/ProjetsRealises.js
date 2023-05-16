import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../../../data/data.json';
import { Link } from 'react-router-dom';
import './ProjetsRealises.scss';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjetsRealises() {
  const [expanded, setExpanded] = useState([]);

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="projet-done">
      <h2>Projets réalisés</h2>
      <div className="projet-cards">
        {data.projets.map((projet, index) => (
          <Card key={index} className="projet-card">
            <Link to={projet.lien} className="card-link">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: orange[700] }} aria-label="recipe">
                    {projet.nom.charAt(0)}
                  </Avatar>
                }
                title={projet.nom}
                subheader={projet.date}
              />
            </Link>
            <CardMedia component="img" height="244" image={projet.img} alt={projet.nom} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {projet.description}
              </Typography>
              <Link to={projet.lien}>Lien vers le projet</Link>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded[index]}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent className="card-footer">
                <Box paragraph className="card-list-title">
                  Technologies Utilisées
                </Box>
                <Box className="technology-box">
                  <Typography>{projet.technologies.join(', ')}</Typography>
                </Box>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProjetsRealises;
