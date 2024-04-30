import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const slayers = [
  {
    name: "One Piece RED",
    slug: 'slayer-1',
    description:"One Piece Film: Red (ONE PIECE FILM RED, Wan Pīsu Firumu Reddo) es la 15ª película de One Piece, la cual se estrenó el 6 de agosto de 2022.",
    picture: 'https://imgmedia.larepublica.pe/640x922/larepublica/migration/images/TGY3NVWXX5EEFGSGAKYKPYPVJU.webp'
  },
  {
    name: "Saga de Arabasta",
    slug: 'slayer-2',
    description:"La Saga de Arabasta (アラバスタ編, Arabasuta Hen), también conocida como Saga de Baroque Works, es la segunda saga del manga de One Piece.",
    picture: 'https://static.wikia.nocookie.net/onepiece/images/8/8c/Pel%C3%ADcula_8.png/revision/latest?cb=20130116033910&path-prefix=es'
  },
  {
    name: "Third slide",
    slug: 'slayer-3',
    description:"El arco de Egghead (エッグヘッド編 Egguheddo hen?), también conocido como el arco de la isla del futuro (未来島編 Mirai-jima hen?) es el trigésimo segundo arco del manga y el anime de One Piece.",
    picture: 'https://image.tmdb.org/t/p/w1280/fqOUJhVYQchjaxOPHiBJ6I7Gr1l.jpg'
  },
  
];

const Main = () =>{
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  return <main>
    <Carousel>
      {
        slayers.map(it =>{
          return(<Carousel.Item onClick={(e)=>{
            e.preventDefault(); handleClick(it.slug)
          }}>
            <img className='w-100 dark-image' src={it.picture}></img>
            <Carousel.Caption>
              <h3>{it.name}</h3>
              <p>{it.description}</p>
              <button className='btn btn-primary'>Ver detalle</button>
            </Carousel.Caption>
            </Carousel.Item>);

        })
      }
    </Carousel>
  </main>;
}

export default Main;