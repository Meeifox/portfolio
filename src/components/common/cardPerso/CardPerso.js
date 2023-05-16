import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { LocationOn, Mail, Phone } from '@mui/icons-material';
import data from '../../../data/data.json';
import portrait from '../../../assets/img/may.jpg';
import './CardPerso.scss';

function CardPerso() {
  const { nom, jobTitle, age, adresse, telephone, email, resume } = data;
  return (
    <section className="presentation-card">
    <Card sx={{ borderRadius: '16px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', backgroundColor: '#fff' }} className="card">
      <Avatar sx={{ width : 200, height : 200 }} src={portrait} alt={nom} />
      <CardContent>
        <div className="myCardContent">
        <Typography gutterBottom variant="h5" component="div" className="card-title">
          {nom}
        </Typography>
        <Typography variant="h6" color="text.secondary" className="card-subtitle">
          {jobTitle}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" className="card-subtitle">
          {age} ans
        </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText primary={adresse} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary={<a href={`mailto:${email}`}>{email}</a>} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={<a href={`tel:${telephone}`}>{telephone}</a>} />
          </ListItem>
        </List>
        <Typography variant="body2" color="text.secondary" className="card-text">
          {resume}
        </Typography>
      </CardContent>
    </Card>
  </section>
  );
}

export default CardPerso;
