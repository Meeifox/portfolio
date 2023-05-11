import './Header.scss'
import banner from '../../assets/img/banner.jpg';
import MayCollapse from '../common/collapse/MayCollapse';




function Header () {
    return (
        <div className='header'>   
            <div className='banner'>
                <img src={banner} alt="Renard Sautant"/>
                <div className="banner-text">
                <h2>Développeuse passionnée, en quête d'une entreprise dynamique où je pourrais mettre mes compétences au service de projets ambitieux.</h2>
                </div>
                <MayCollapse title={<i className="fa-solid fa-bars" ></i>}>
                <div id='navBar'>                
                <nav>                    
                    <ul>
                        <li><h3>Présentation</h3></li>
                        <li><h3>Mes projetes réalisés</h3></li>                        
                        <li><a href="https://www.linkedin.com/in/napakon-portier-711105271/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Meeifox"><i className="fa-brands fa-github" target="_blank" rel="noopener noreferrer"></i></a></li>
                        <li><a href="https://www.dropbox.com/s/c7ny8p2oo93dzhl/CV%20NPORTIER11052023.pdf?dl=1" target="_blank" rel="noopener noreferrer"><h3>Téléchargez mon CV</h3><i className="fa-solid fa-download"></i></a></li>                  
                    </ul>                    
                </nav>  
            </div> 
            </MayCollapse>
            </div>
    </div>                
  
)}

export default Header;