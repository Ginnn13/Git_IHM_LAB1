const Header = () => {
    return <nav className="navbar navbar-expand-lg bg-danger">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand fw-bold" href="#"> 
        <img src="https://i.pinimg.com/736x/53/17/30/5317306b8431010ff46c7406c558e564.jpg" width="100" height="100"/>
        ONE PIECE</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active fw-bold" aria-current="page" href="#"> <i data-feather="home"></i>Inicio</a>
          </li>
          <li className="nav-item fw-bold">
            <a className="nav-link" href="#"><i data-feather="film"></i> Serie</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-warning" type="submit"> <i data-feather="search"></i>Buscar</button>
        </form>
      </div>
    </div>
  </nav>

}
export default Header;