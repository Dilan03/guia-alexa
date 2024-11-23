import Accordion from 'react-bootstrap/Accordion';
import { FaExclamationTriangle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Vulnerabilities() {
   const vulnerabilities = [
      {
         id: 1,
         title: "No borrar los comandos de voz diariamente y no eliminar el historial de comandos de voz",
         risks: [
            "Exposición de información personal: Alexa guarda los comandos de voz para mejorar su funcionamiento, pero también pueden contener información sensible que podría ser accedida por terceros si se compromete la cuenta o el dispositivo.",
            "Acceso no autorizado: Si alguien obtiene acceso a tu cuenta de Amazon, puede escuchar el historial de voz y obtener detalles sobre tus hábitos o datos personales.",
            "Perfilamiento no deseado: Amazon utiliza los datos para mejorar sus servicios y ofrecer publicidad personalizada. Mantener el historial sin borrar puede contribuir a un perfil más detallado de ti sin tu pleno consentimiento."
         ],
         practices: [
            "Borrar periódicamente el historial de voz en la app de Alexa o configurarlo para borrado automático.",
            "Revisar y ajustar las configuraciones de privacidad en la aplicación de Alexa."
         ]
      },
      {
         id: 2,
         title: "Ubicarlo en cualquier lugar de la casa",
         risks: [
            "Espionaje accidental: Si Alexa está ubicada en lugares sensibles (dormitorios, oficinas), puede captar información privada o confidencial sin que te des cuenta.",
            "Acceso a información privada: Si alguien externo está en una habitación donde está Alexa, puede intencionalmente o no, interactuar con el dispositivo y acceder a funciones sensibles."
         ],
         practices: [
            "Colocar el dispositivo en espacios comunes donde no se discutan temas confidenciales.",
            "Evitar colocar Alexa cerca de ventanas, puertas o en lugares donde un tercero pueda usarla desde el exterior de la casa."
         ]
      },
      {
         id: 3,
         title: "No apagar el micrófono y la cámara cuando no está en uso",
         risks: [
            "Activación no deseada: El micrófono puede captar conversaciones o ruidos que no estaban destinados a interactuar con el dispositivo, lo que podría derivar en grabaciones accidentales.",
            "Hacking o vulnerabilidades: Si alguien compromete el dispositivo, puede usar el micrófono y la cámara para espiar. Por ejemplo, en 2019 se reportaron vulnerabilidades que podrían permitir a los hackers usar dispositivos como los Echo para escuchar conversaciones.",
            "Intrusión en la privacidad: Incluso errores o activaciones accidentales pueden permitir que datos sensibles sean enviados a los servidores de Amazon."
         ],
         practices: [
            "Activar el botón de privacidad para desactivar el micrófono y la cámara cuando no estés usando el dispositivo.",
            "Revisar regularmente las grabaciones almacenadas y eliminar las que no desees conservar."
         ]
      },
      {
         id: 4,
         title: "No cambiar la palabra de activación",
         risks: [
            "Activación accidental: \"Alexa\" es una palabra común, lo que aumenta las probabilidades de que el dispositivo responda por error a una conversación normal.",
            "Control por terceros: Al no cambiar la palabra de activación, alguien más que conozca la configuración predeterminada puede interactuar con el dispositivo sin tu consentimiento."
         ],
         practices: [
            "Cambiar la palabra de activación a una menos común (por ejemplo, \"Echo\" o \"Amazon\").",
            "Educar a los miembros de la familia sobre cómo y cuándo usar el dispositivo."
         ]
      },
      {
         id: 5,
         title: "No configurar las compras mediante la voz",
         risks: [
            "Compras no autorizadas: Sin la configuración de seguridad adecuada, cualquier persona (incluyendo niños o visitantes) podría realizar compras simplemente dando un comando.",
            "Errores accidentales: Si el dispositivo interpreta mal un comando, podría realizar compras no deseadas."
         ],
         practices: [
            "Configurar un PIN para las compras por voz.",
            "Desactivar las compras por voz si no es una función indispensable."
         ]
      }
   ];

   return (
      <div className="container my-5 min-vh-100">
         <h1 className="text-center">Lista de Vulnerabilidades</h1>
         <Accordion className="mt-4">
            {vulnerabilities.map((item, index) => (
               <Accordion.Item eventKey={index.toString()} key={item.id}>
                  <Accordion.Header>
                     <FaExclamationTriangle className="mx-2" color="#ADD8E6" />
                     <h3>{item.title}</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                     <h5 className="text-danger">⚠️ Riesgos</h5>
                     <ul className="list-group mb-3">
                        {item.risks.map((risk, idx) => (
                           <li
                              key={idx}
                              className="list-group-item d-flex align-items-start bg-light border-danger mb-2 shadow-sm"
                              style={{ borderLeft: "4px solid red", padding: "10px" }}
                           >
                              <span className="text-muted fw-bold me-2">•</span> {risk}
                           </li>
                        ))}
                     </ul>
                     <h5 className="text-success">✅ Buenas prácticas</h5>
                     <ul className="list-group">
                        {item.practices.map((practice, idx) => (
                           <li
                              key={idx}
                              className="list-group-item d-flex align-items-start bg-light border-success mb-2 shadow-sm"
                              style={{ borderLeft: "4px solid green", padding: "10px" }}
                           >
                              <span className="text-muted fw-bold me-2">•</span> {practice}
                           </li>
                        ))}
                     </ul>
                  </Accordion.Body>
               </Accordion.Item>
            ))}
         </Accordion>
      </div>
   );
}

export default Vulnerabilities;