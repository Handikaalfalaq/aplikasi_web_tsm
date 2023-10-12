import {React} from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import { useNavigate, useLocation  } from 'react-router-dom';
import '../assets/css/navbar.css'

function Navbars() {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <Navbar className="navbarcss">
        <Nav.Link className={location.pathname === '/' ? 'activeHomeNavbar' : 'homeNavbar'} onClick={() => navigate(`/`)}>Home</Nav.Link>
        <Nav.Link className={location.pathname === '/pengunjung' ? 'activeHomeNavbar' : 'homeNavbar'} onClick={() => navigate(`/pengunjung`)}>Pengunjung</Nav.Link>
        <Nav.Link className={location.pathname === '/gedung' ? 'activeHomeNavbar' : 'homeNavbar'} onClick={() => navigate(`/gedung`)}>Gedung</Nav.Link>
        <Nav.Link className={location.pathname === '/toko' ? 'activeHomeNavbar' : 'homeNavbar'} onClick={() => navigate(`/toko`)}>Toko</Nav.Link>
    </Navbar>
  );
}

export default Navbars;