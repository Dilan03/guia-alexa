import { useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";

function Header() {
   const navigate = useNavigate();

   return (
      <header className="header py-3 bg-primary text-white d-flex align-items-center">
         {/* Ícono junto al texto de Alexa Secure */}
         <h1 className="m-0 d-flex align-items-center mx-5" style={{ fontSize: '20px' }} onClick={() => navigate("/")}>
            <GrSecure className="me-2" size={55} /> Alexa Secure
         </h1>

         {/* Enlace estilizado para volver a Home */}
         <div
            className="text-light me-5 pointer"
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer', fontSize: '16px' }}
         >
            Home
         </div>
      </header>
   );
}

export default Header;
