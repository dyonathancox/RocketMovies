import { Container, Profile } from './styles.js';
import { Input } from "../Input";
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <Profile>
            <div>
                <h1>RocketMovies</h1>
                <Input placeholder="Pesquise pelo título" />
                
                <section>

                    <Link to="/profile"><strong>Dyonathan Cox</strong></Link>
                    <span>Sair</span>
                </section>
            </div>
                <img src="https://github.com/dyonathancox.png" alt="Foto do usuário" />
            </Profile>            
        </Container>
    )
}