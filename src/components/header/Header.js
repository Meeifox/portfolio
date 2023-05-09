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
                        <li><a href="https://www.linkedin.com/in/napakon-portier-711105271/"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Meeifox"><i className="fa-brands fa-github"></i></a></li>
                        <li><h3>Téléchargez mon CV</h3><i className="fa-solid fa-download"></i></li>                  
                    </ul>                    
                </nav>  
            </div> 
            </MayCollapse>
            </div>
    </div>                
  
)}

export default Header;