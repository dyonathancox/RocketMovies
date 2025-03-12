import { Container, Profile } from './styles.js';
import { Input } from "../Input";

export function Header(){
    return(
        <Container>
            <Profile>
            <div>
                <h1>RocketMovies</h1>
                <Input placeholder="Pesquise pelo título" />
                
                <section>

                    <strong>Dyonathan Cox</strong>
                    <span>Sair</span>
                </section>
            </div>
                <img src="https://github.com/dyonathancox.png" alt="Foto do usuário" />
            </Profile>            
        </Container>
    )
}