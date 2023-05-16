import React from 'react';
import { IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PortraitIcon from '@mui/icons-material/Portrait';
import './NavBar.scss';


function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="nav-bar">
          <IconButton aria-label="menu" onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>
      {open && (
        <div className="nav-menu">
        <List component="nav">
          <ListItem buttonbase={{toString}} component="a" href="#presentation">
              <ListItemIcon>
                <PortraitIcon />
              </ListItemIcon>
            <ListItemText primary="Présentation" />
          </ListItem>
          <ListItem buttonbase={{toString}} component="a" href="#projets-realises">
            <ListItemIcon>
              <PermMediaIcon />
            </ListItemIcon>
            <ListItemText primary="Mes projets réalisés" />
          </ListItem>
          <ListItem buttonbase={{toString}} component="a" href="https://www.linkedin.com/in/napakon-portier-711105271/" target="_blank" rel="noopener noreferrer">
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem buttonbase={{toString}} component="a" href="https://github.com/Meeifox" target="_blank" rel="noopener noreferrer">
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
          <ListItem buttonbase={{toString}} component="a" href="https://www.dropbox.com/s/be1ascva1j4wfnr/CV%20Developpeuse%20Web%20NPORTIER%2016052023.pdf?dl=1" target="_blank" rel="noopener noreferrer">
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText primary="Téléchargez mon CV" />
          </ListItem>
        </List>
        </div>
      )}   
    </div> 
  );
  
}

export default ResponsiveAppBar;
