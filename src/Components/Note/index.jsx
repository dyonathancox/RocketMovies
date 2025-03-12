import { Container } from "./styles";

import { Tag } from '../Tag'
import { FiStar  } from 'react-icons/fi';
import { FaStar } from "react-icons/fa";


export function Note({data, ...rest}){
    return(
        <Container {...rest}>

            <div>
                <h1>{data.title}</h1>
                <FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FiStar className="star" />
                <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
            </div>
            
            

            {
                data.tags &&

                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}></Tag>)
                    }
                </footer>
            }

        </Container>
    )
}
