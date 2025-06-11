import { Container } from "./styles";
import { Tag } from "../../components/Tag";
import { Rating } from "../Rating";
import { useNavigate } from "react-router-dom";

export function Note({ data, ...rest }) {
  const navigate = useNavigate();

  function handleClick() {
    // Dyonathan do futuro, quando for criar a questão de detalhes do filme, substituir o caminho para navigate(`/movie/${data.id}`);
    //ele vai pegar cada card pelo id definido no home.jsx
    // e ai vai direto para a página de detalhes sobre aquele card
    navigate(`/movie/`);
  }

  return (
    <Container {...rest} onClick={handleClick} style={{ cursor: "pointer" }}>
      <h1>{data.title}</h1>
      <Rating value={data.rating} />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
