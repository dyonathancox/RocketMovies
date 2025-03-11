import { Container, Profile} from "./styles";
import { Input } from "../Input";

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquise pelo título" />
            <Profile>
                
            <div>
                <strong>Dyonathan Cox</strong>
                <span>Sair</span>
            </div>
                <img src="https://github.com/dyonathancox.png" alt="Foto do usuário" />
            
            </Profile>            
        </Container>
    )
}