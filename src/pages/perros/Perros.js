import { getAll } from '../../components/perros/Perros';
import './Perros.css';
import Razas from '../../components/perros/Razas';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Perros(){
    const perros=getAll()
    return(
        <div className='container'>
        <Header/>
        <Navbar/>
        <h1>Listado perros</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                    perros.map(p=>(
                        <Razas 
                        p1={p.id} 
                        p2={p.thumbnail}
                        p3={p.raza}
                        p4={p.descripcion}
                        p5={p.acercade}
                        p6={p.imagen}
                        p7={p.pais}
                        p8={p.vida}
                        p9={p.tamaño}
                        />
                    ))
                    }
        </div>
        <Footer/>
        </div>
    )
}

export default Perros;