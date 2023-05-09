import './Home.scss';
import CardPerso from '../../components/common/collapse/cardPerso/CardPerso';
import Competences from '../../components/common/collapse/competences/Competences';
import ProjetsRealises from '../../components/common/projetsRealises/ProjetsRealises';



export default function Home () {
    return (
        <main className='home'>
        <section className='presentation'>
        <CardPerso></CardPerso>    
        <Competences></Competences> 
        </section>
        <section className='projets-realises'>
        <ProjetsRealises></ProjetsRealises>
        </section>
        </main>
    )
}
    
