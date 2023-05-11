import './Home.scss';
import CardPerso from '../../components/common/collapse/cardPerso/CardPerso';
import Competences from '../../components/common/collapse/competences/Competences';
import ProjetsRealises from '../../components/common/projetsRealises/ProjetsRealises';
import Formation from '../../components/parcours/Formation'
import Experiences from '../../components/experiences/Experiences';
import CompetencesInformatique from '../../components/common/competencesDev/CompetencesDev';



export default function Home () {
    return (
        <main className='home'>
        <section id='presentation'>
        <CardPerso></CardPerso>    
        <Competences></Competences> 
        </section>       
        <section id='competence-informatique'>
        <CompetencesInformatique></CompetencesInformatique>
        </section>
        <section id='projets-realises'>
        <ProjetsRealises></ProjetsRealises>
        </section>
        <section id='formation'>
        <Formation></Formation>
        <Experiences></Experiences>
        </section>

        </main>
    )
}
    
