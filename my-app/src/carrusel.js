import Carousel from 'react-bootstrap/Carousel';

function Carruselyo() {
  return (
    
    <Carousel>
      
      <Carousel.Item>
      <img text="First slide" src="https://imgmedia.larepublica.pe/640x922/larepublica/migration/images/TGY3NVWXX5EEFGSGAKYKPYPVJU.webp" className="img-thumbnail rounded mx-auto d-block w-45" />
          <h3>One Piece RED </h3>
          <p>One Piece Film: Red (ONE PIECE FILM RED, Wan Pīsu Firumu Reddo) es la 15ª película de One Piece, la cual se estrenó el 6 de agosto de 2022.</p>
      </Carousel.Item>
      <Carousel.Item>
      <img text="Second slide" src="https://static.wikia.nocookie.net/onepiece/images/8/8c/Pel%C3%ADcula_8.png/revision/latest?cb=20130116033910&path-prefix=es" className="img-thumbnail rounded mx-auto d-block w-50" />
          <h3>Saga de Arabasta</h3>
          <p>La Saga de Arabasta (アラバスタ編, Arabasuta Hen), también conocida como Saga de Baroque Works, es la segunda saga del manga de One Piece.</p>
      </Carousel.Item>
      <Carousel.Item>
      <img text="Third slide" src="https://image.tmdb.org/t/p/w1280/fqOUJhVYQchjaxOPHiBJ6I7Gr1l.jpg" className="img-thumbnail rounded mx-auto d-block w-50" />
      <h3>Saga de Egghead</h3>
          <p>El arco de Egghead (エッグヘッド編 Egguheddo hen?), también conocido como el arco de la isla del futuro (未来島編 Mirai-jima hen?) es el trigésimo segundo arco del manga y el anime de One Piece
          </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carruselyo;