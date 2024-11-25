import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaMicrophoneSlash, FaLock, FaShoppingCart } from 'react-icons/fa'; // Importar iconos de React Icons

function ConfigMenu() {
   const navigate = useNavigate();

   return (
      <div className="config-menu-container">
         <h1 className="text-center mt-4 text-primary">Menú de Configuración</h1>
         <div className="container mt-4 d-flex flex-column align-items-center">

            {/* Tarjeta 1 - Borrar comandos de voz */}
            <div className="card mb-4 shadow-lg p-3 rounded bg-light text-dark d-flex flex-column w-75">
               <div className="d-flex align-items-center">
                  <FaTrashAlt className="text-danger mx-3" style={{ fontSize: '2rem' }} />
                  <h4 className="card-title">Borra los comandos de voz a diario</h4>
               </div>
               <p>Mantener el historial de comandos de voz puede comprometer tu privacidad y seguridad.
                  Borra regularmente los registros para evitar accesos no autorizados, proteger información sensible y prevenir un perfilamiento excesivo.</p>
               <div className="mt-auto">
                  <button className="btn btn-primary float-end" onClick={() => navigate("/conf1")}>Empezar</button>
               </div>
            </div>

            {/* Tarjeta 2 - Eliminar historial de Alexa */}
            <div className="card mb-4 shadow-lg p-3 rounded bg-light text-dark d-flex flex-column w-75">
               <div className="d-flex align-items-center">
                  <FaTrashAlt className="text-warning mx-3" style={{ fontSize: '2rem' }} />
                  <h4 className="card-title">Eliminar el historial de comandos de voz de Alexa</h4>
               </div>
               <p>Es importante borrar regularmente el historial de comandos de voz para proteger tu privacidad y evitar que datos sensibles queden almacenados en los servidores de Amazon.</p>
               <div className="mt-auto">
                  <button className="btn btn-primary float-end" onClick={() => navigate("/conf2")}>Empezar</button>
               </div>
            </div>

            {/* Tarjeta 3 - Apagar micrófono y cámara */}
            <div className="card mb-4 shadow-lg p-3 rounded bg-light text-dark d-flex flex-column w-75">
               <div className="d-flex align-items-center">
                  <FaMicrophoneSlash className="text-info mx-3" style={{ fontSize: '2rem' }} />
                  <h4 className="card-title">Apagar micrófono y cámara</h4>
               </div>
               <p>Es recomendable desactivar el micrófono y la cámara de Alexa cuando no se esté utilizando. Esto ayuda a proteger tu privacidad evitando grabaciones no deseadas y a prevenir posibles accesos no autorizados al dispositivo.</p>
               <div className="mt-auto">
                  <button className="btn btn-primary float-end" onClick={() => navigate("/conf3")}>Empezar</button>
               </div>
            </div>

            {/* Tarjeta 4 - Cambiar palabra de activación */}
            <div className="card mb-4 shadow-lg p-3 rounded bg-light text-dark d-flex flex-column w-75">
               <div className="d-flex align-items-center">
                  <FaLock className="text-success mx-3" style={{ fontSize: '2rem' }} />
                  <h4 className="card-title">Cambiar la palabra de activación</h4>
               </div>
               <p>Cambiar la palabra de activación de Alexa a una menos común puede ayudar a reducir las activaciones accidentales. Esto también mejora la seguridad, ya que dificulta que personas no autorizadas interactúen con el dispositivo sin tu consentimiento.</p>
               <div className="mt-auto">
                  <button className="btn btn-primary float-end" onClick={() => navigate("/conf4")}>Empezar</button>
               </div>
            </div>

            {/* Tarjeta 5 - Configurar compras mediante voz */}
            <div className="card mb-4 shadow-lg p-3 rounded bg-light text-dark d-flex flex-column w-75">
               <div className="d-flex align-items-center">
                  <FaShoppingCart className="text-primary mx-3" style={{ fontSize: '2rem' }} />
                  <h4 className="card-title">Configurar las compras mediante voz</h4>
               </div>
               <p>Configurar un PIN o desactivar la opción de compras por voz en Alexa ayuda a prevenir compras no autorizadas o errores accidentales. Esto proporciona una capa adicional de seguridad, especialmente si el dispositivo se utiliza en entornos con acceso no controlado.</p>
               <div className="mt-auto">
                  <button className="btn btn-primary float-end" onClick={() => navigate("/conf5")}>Empezar</button>
               </div>
            </div>

         </div>
      </div>
   );
}

export default ConfigMenu;