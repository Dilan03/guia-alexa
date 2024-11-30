import SubForm from "./SubForm";
import { FaEnvelope, FaBell } from "react-icons/fa";

function Notificaciones() {
   return (
      <div className="container mt-5 p-4 border rounded shadow-sm bg-light">
         <h2 className="text-center text-primary mb-4">
            <FaBell className="me-2" />
            Notificaciones Automáticas
         </h2>
         <p className="text-center fs-5 text-secondary">
            ¿Quieres recibir recordatorios para borrar el historial de voz de Alexa?
            Suscríbete a nuestras notificaciones por correo y te enviaremos un recordatorio periódico para ayudarte a proteger tu privacidad.
         </p>
         <p className="text-center text-muted">
            Es rápido, fácil, y siempre puedes cancelar tu suscripción cuando quieras.
         </p>
         <br /><br /><br />
         <div className="d-flex justify-content-center mt-4">
            {/* Formulario de suscripción */}
            <SubForm />
         </div>
         <br /><br /><br />
         <div className="text-center mt-3">
            <FaEnvelope className="text-primary" size={30} />
            <p className="mt-2 text-secondary">
               ¡Nunca compartiremos tu correo con terceros!
            </p>
         </div>
      </div>
   );
}

export default Notificaciones;