import banner from '../../assets/img/banner.jpg';
import './Header.scss';
import ResponsiveAppBar from '../common/navBar/NavBar';



function Header() {  

  return (
    <header className="header">     
      <div className="banner">        
        <div className="banner-image">          
          <img src={banner} alt="Renard Sautant" />
          <ResponsiveAppBar></ResponsiveAppBar>
        </div>
        
        <div className="banner-text">
          <h2>Développeuse passionnée, en quête d'une entreprise dynamique où je pourrais mettre mes compétences au service de projets ambitieux.</h2>
        </div>
         
      </div>
    </header>
  );
  }

  export default Header;