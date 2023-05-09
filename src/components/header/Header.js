import './Header.scss'
import banner from '../../assets/img/banner.jpg';
import Collapse from '../common/collapse/Collapse';




function Header () {
    return (
        <div className='header'>   
            <div className='banner'>
                <img src={banner} alt="Renard Sautant"/>
                <div className="banner-text">
                <h2>Développeuse passionnée, en quête d'une entreprise dynamique où je pourrais mettre mes compétences au service de projets ambitieux.</h2>
                </div>
                <Collapse title={<i className="fa-solid fa-bars" ></i>}>
                <div id='navBar'>                
                <nav>                    
                    <ul>
                        <li><h3>Présentation</h3></li>
                        <li><h3>Mes projetes réalisés</h3></li>
                        <li><h3>Mon CV</h3></li>
                        <li><h3>Me contacter</h3></li>  
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-brands fa-github"></i></li>                      
                    </ul>                    
                </nav>  
            </div> 
            </Collapse>
            </div>
    </div>                
  
)}

export default Header;