import { useNavigate } from "react-router-dom";
import { FaRocket, FaShieldAlt } from "react-icons/fa";

function Home() {
   const navigate = useNavigate();

   return (
      <>
         {/* Estilo mejorado para el H1 */}
         <h1 className="text-center my-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}>
            Bienvenido a Alexa Secure
         </h1>

         {/* Estilo mejorado para el P */}
         <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia iste placeat qui repellendus exercitationem ipsam saepe
            laudantium laborum natus incidunt ipsa aperiam vero velit recusandae, sequi consequatur atque nobis!
         </p>

         {/* Contenedor con altura y centrado responsivo */}
         <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '60vh' }}>
            <div className="buttons d-flex flex-column align-items-center w-100">
               {/* Botón de vulnerabilidades */}
               <button
                  className="btn btn-primary btn-lg mb-5"
                  onClick={() => navigate("/vulnerabilities")}
                  style={{ height: '160px', maxWidth: '300px', width: '100%' }}
               >
                  <FaShieldAlt className="mb-3" size={50} /> Ver Vulnerabilidades
               </button>

               {/* Botón de configuración */}
               <button
                  className="btn btn-secondary btn-lg mb-3"
                  onClick={() => navigate("/config-menu")}
                  style={{ height: '160px', maxWidth: '300px', width: '100%' }}
               >
                  <FaRocket className="mb-3" size={50} /> Ir al Menú de Configuración
               </button>
            </div>
         </div>

         <div className="container">
            <br /><br /><br /><br /><br /><br /><br />
            <h2 className="text-center my-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}>
               Acerca de Alexa Secure
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam doloribus veritatis, distinctio hic perferendis, rerum libero quibusdam doloremque quaerat adipisci perspiciatis quasi eveniet mollitia natus ut voluptatum tempore! Libero.
            </p>
            <br /><br /><br /><br /><br /><br /><br />
            <h2 className="text-center my-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}>
               Equipo
            </h2>
            <div className="container mt-5">
               <div className="row text-center">
                  {/* Columna 1 */}
                  <div className="col-md-4 mb-4">
                     <img
                        src="https://via.placeholder.com/150"
                        alt="Imagen 1"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                     />
                     <p>Descripción corta de la imagen 1.</p>
                  </div>

                  {/* Columna 2 */}
                  <div className="col-md-4 mb-4">
                     <img
                        src="https://via.placeholder.com/150"
                        alt="Imagen 2"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                     />
                     <p>Descripción corta de la imagen 2.</p>
                  </div>

                  {/* Columna 3 */}
                  <div className="col-md-4 mb-4">
                     <img
                        src="https://via.placeholder.com/150"
                        alt="Imagen 3"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                     />
                     <p>Descripción corta de la imagen 3.</p>
                  </div>
               </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
         </div>
      </>
   );
}

export default Home;