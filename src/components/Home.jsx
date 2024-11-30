import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { FaMicrophoneAltSlash, FaKey, FaShoppingCart } from "react-icons/fa";
import { MdRoom, MdPrivacyTip } from "react-icons/md";
import vul1 from '../assets/vulnerabilidades/vul1.jpg';
import vul2 from '../assets/vulnerabilidades/vul2.jpg';
import vul3 from '../assets/vulnerabilidades/vul3.jpg';
import vul4 from '../assets/vulnerabilidades/vul4.jpg';
import vul5 from '../assets/vulnerabilidades/vul5.jpg';
import Modal from "react-modal";

// Establecer el elemento del modal en el DOM
Modal.setAppElement("#root");

function Home() {
   const navigate = useNavigate();

   // Estado para manejar la visibilidad y contenido del modal
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalContent, setModalContent] = useState({});

   // Función para abrir el modal con contenido específico
   const openModal = (content) => {
      setModalContent(content);
      setModalIsOpen(true);
   };


   // Contenido de las vulnerabilidades
   const vulnerabilities = [
      {
         title: "No borro los comandos de voz",
         img: vul1,
         icon: <FaMicrophoneAltSlash size={50} />, // Icono para "voz"
         risks: [
            "Exposición de información personal.",
            "Acceso no autorizado.",
            "Perfilamiento no deseado.",
         ],
         practices: [
            "Borrar periódicamente el historial de voz.",
            "Revisar las configuraciones de privacidad.",
         ],
      },
      {
         title: "Ubico a Alexa en cualquier lugar de la casa",
         img: vul2,
         icon: <MdRoom size={50} />, // Icono para "ubicación"
         risks: [
            "Espionaje accidental.",
            "Acceso a información privada.",
         ],
         practices: [
            "Colocar el dispositivo en espacios comunes.",
            "Evitar lugares accesibles desde el exterior.",
         ],
      },
      {
         title: "No apago el micrófono y la cámara",
         img: vul3,
         icon: <MdPrivacyTip size={50} />, // Icono para "privacidad"
         risks: [
            "Activación no deseada.",
            "Hacking o vulnerabilidades.",
            "Intrusión en la privacidad.",
         ],
         practices: [
            "Activar el botón de privacidad para desactivar micrófono y cámara.",
            "Eliminar grabaciones no deseadas.",
         ],
      },
      {
         title: "No cambio la palabra de activación",
         img: vul4,
         icon: <FaKey size={50} />, // Icono para "palabra clave"
         risks: [
            "Activación accidental.",
            "Control por terceros.",
         ],
         practices: [
            "Cambiar la palabra de activación.",
            "Educar a los miembros de la familia.",
         ],
      },
      {
         title: "No configuro las compras mediante la voz",
         img: vul5,
         icon: <FaShoppingCart size={50} />, // Icono para "compras"
         risks: [
            "Compras no autorizadas.",
            "Errores accidentales.",
         ],
         practices: [
            "Configurar un PIN para las compras por voz.",
            "Desactivar compras por voz si no es necesario.",
         ],
      },
   ];



   return (
      <>
         <section className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', background: 'linear-gradient(60deg, #e7f4ff, #54B4D3)', backgroundSize: '400% 400%', animation: 'gradientAnimation 15s ease infinite' }}>

            {/* Estilo mejorado para el H1 */}
            <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '700', color: '#ffffff', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)' }}>
               Bienvenido a Alexa Secure
            </h1>

            {/* Estilo mejorado para el P */}
            <p className="text-center text-secondary p-4" style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', textAlign: 'center' }}>
               Aquí encontrarás pasos sencillos e interactivos para mitigar riesgos como accesos no autorizados o grabaciones no deseadas. Optimiza tu experiencia con Alexa de forma segura y confiable. <strong>¡Comienza ahora!</strong>
            </p>

            {/* Contenedor con altura y centrado responsivo */}
            <div className="d-flex align-items-center justify-content-center">
               <div className="d-flex flex-column align-items-center w-100">
                  <button
                     className="btn btn-lg btn-primary shadow-lg"
                     onClick={() => navigate("/config-menu")}
                     style={{ height: '120px', maxWidth: '320px', width: '100%', fontSize: '1.2rem', borderRadius: '10px' }}
                  >
                     <FaRocket className="mb-3" size={50} /> Aplicar recomendaciones
                  </button>
               </div>
            </div>

         </section>

         <br /><br /><br /><br /><br /><br /><br />
         {/* Botones de vulnerabilidades */}
         <div className="d-flex align-items-center justify-content-center mt-5 container">
            <div className="row w-100 justify-content-center">
               <h2 className="text-center my-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}>
                  ¿Qué pasa si...?
               </h2>
               {vulnerabilities.map((vulnerability, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                     <div className="card" style={{ width: '100%', height: '100%' }}>
                        {/* Imagen de la tarjeta (placeholder) */}
                        <img
                           src={vulnerability.img}// Placeholder para la imagen
                           className="card-img-top"
                           alt="Vulnerability"
                           style={{ height: '150px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                           {/* Icono y título */}
                           <div className="d-flex justify-content-center mb-3">
                              {vulnerability.icon}
                           </div>
                           <h5 className="card-title text-center">{vulnerability.title}</h5>
                           {/* Botón para abrir el modal */}
                           <button
                              className="btn btn-primary w-100"
                              onClick={() => openModal(vulnerability)}
                           >
                              Saber más
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
               content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  maxWidth: '500px',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)', // Aura azul
                  backgroundColor: '#f9f9ff', // Fondo claro
               },
            }}
         >
            <h2
               style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
               }}
            >
               {modalContent.title}
            </h2>

            <h4
               style={{
                  color: '#333',
                  fontSize: '1.4rem',
                  marginBottom: '0.5rem',
                  borderBottom: '2px solid #007BFF',
                  paddingBottom: '0.3rem',
                  fontWeight: 'bold',
               }}
            >
               Riesgos:
            </h4>
            <ul
               style={{
                  listStyleType: 'circle',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem',
                  color: '#555',
                  lineHeight: '1.6',
               }}
            >
               {modalContent.risks?.map((risk, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                     {risk}
                  </li>
               ))}
            </ul>

            <h4
               style={{
                  color: '#333',
                  fontSize: '1.4rem',
                  marginBottom: '0.5rem',
                  borderBottom: '2px solid #007BFF',
                  paddingBottom: '0.3rem',
                  fontWeight: 'bold',
               }}
            >
               Prácticas recomendadas:
            </h4>
            <ul
               style={{
                  listStyleType: 'square',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem',
                  color: '#555',
                  lineHeight: '1.6',
               }}
            >
               {modalContent.practices?.map((practice, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                     {practice}
                  </li>
               ))}
            </ul>

            <button
               onClick={() => setModalIsOpen(false)}
               className="btn btn-secondary mt-3"
               style={{
                  display: 'block',
                  margin: '0 auto',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease',
                  boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
               }}
               onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
               onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
            >
               Cerrar
            </button>
         </Modal>

         <div className="container">
            <br /><br /><br /><br /><br /><br /><br />
            <h2 className="text-center my-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}>
               Acerca de Alexa Secure
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
               Alexa Secure es una guía interactiva que te ayuda a configurar tu Alexa de forma fácil y segura. Nuestro objetivo es proteger tu privacidad mientras disfrutas de todas sus funciones, minimizando riesgos como accesos no autorizados o uso indebido de datos. Tu seguridad, nuestra prioridad.
            </p>
            <br /><br /><br /><br /><br /><br /><br />
            <h2 className="text-center my-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}>
               Equipo 1 Taller de Investigación 2
            </h2>
            <div className="container mt-5">
               <div className="row text-center">
                  {/* Columna 1 */}
                  <div className="col-md-4 mb-4">
                     <img
                        src="https://avatars.githubusercontent.com/u/119697279?v=4"
                        alt="Imagen 1"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                     />
                     <p>Jesús Elías Sierra Ruíz</p>
                  </div>

                  {/* Columna 2 */}
                  <div className="col-md-4 mb-4">
                     <img
                        src="https://avatars.githubusercontent.com/u/90223932?v=4"
                        alt="Imagen 2"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                     />
                     <p>Dilan Mauricio García Hernández</p>
                  </div>

                  {/* Columna 3 */}
                  <div className="col-md-4 mb-4">
                     <img
                        src="https://avatars.githubusercontent.com/u/51183597?v=4"
                        alt="Imagen 3"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                     />
                     <p>Israel Chacón Rojo</p>
                  </div>
               </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />

         </div>
      </>
   );
}

export default Home;