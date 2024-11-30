import { useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
   const navigate = useNavigate();

   return (
      <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
         <div className="container d-flex align-items-center">
            {/* Logo y título de Alexa Secure */}
            <Navbar.Brand
               className="d-flex align-items-center pointer"
               onClick={() => navigate("/")}
               style={{ fontSize: '20px' }}
            >
               <GrSecure className="me-2" size={35} />
               <strong>Alexa Secure</strong>
            </Navbar.Brand>

            {/* Navbar toggle para dispositivos móviles */}
            <Navbar.Toggle aria-controls="navbar-nav" />

            {/* Menú de navegación */}
            <Navbar.Collapse id="navbar-nav">
               <Nav className=""> {/* Alinea el contenido a la derecha */}
                  <Nav.Link
                     className="text-light nav-link-hover"
                     onClick={() => navigate("/")}
                     style={{ fontSize: '16px' }}
                  >
                     Home
                  </Nav.Link>
                  <Nav.Link
                     className="text-light nav-link-hover"
                     onClick={() => navigate("/notificaciones")}
                     style={{ fontSize: '16px' }}
                  >
                     Notificaciones
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </div>
      </Navbar>
   );
}

export default Header;
