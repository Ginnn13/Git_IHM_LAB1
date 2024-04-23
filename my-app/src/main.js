const Main = () =>{
    return <main>
        
        <h2 className="text-center">Carrusel</h2>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es" className="img-thumbnail rounded mx-auto d-block w-50" />
            </div>
            <div className="carousel-item">
                
                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpe" className="img-thumbnail rounded mx-auto d-block w-45" />
            </div>
            <div className="carousel-item">
                <img src="https://www.planetadelibros.com/usuaris/libros/thumbs/f0c773cb-4626-4a4b-a472-2a7925703687/d_1200_1200/portada_one-piece-n-106_eiichiro-oda_202311201627.webp" className="img-thumbnail rounded mx-auto d-block w-50" />
            </div>
          </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
         <span className="carousel-control-next-icon " aria-hidden="true"></span>
         <span className="visually-hidden ">Next</span>
        </button>
        </div>
        <p className="text-center fw-bold">"One Piece es un manga escrito e ilustrado por el mangaka japonés Eiichirō Oda. Comenzó a publicarse en la revista Japonesa Weekly Shōnen Jump el 22 de julio de 1997 y a la fecha se han publicado 108 volúmenes."</p>
        
    </main>
}
export default Main;