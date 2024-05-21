const Footer = () => {
    return <footer className="foot" >
        
        <h4 className="text-center ">@2024-Gino Josue Guevara Villalobos</h4>
        <div className="row">
          <div className="col-md-6">
          <a className="nav-link fw-bold text-center"  href="#"> <i data-feather="book-open"></i>Terminos y Condiciones</a>
          </div>
          <div className="col-md-6">
          <a className="nav-link fw-bold text-center"  href="#"> <i data-feather="shield"></i>Politica y Privacidad</a>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4">
        <a className="nav-link fw-bold text-center"  href="#"> <i data-feather="facebook"></i>Facebook</a>
        </div>
        <div className="col-md-4">
        <a className="nav-link fw-bold text-center"  href="#"> <i data-feather="instagram"></i>Instagram</a>
        </div>
        <div className="col-md-4">
        <a className="nav-link fw-bold text-center"  href="#"> <i data-feather="twitter"></i>Twitter</a>
        </div>
        </div>
        
    </footer>
}
export default Footer;