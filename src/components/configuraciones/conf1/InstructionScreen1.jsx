import { useState } from 'react';
import { ProgressBar, Modal, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaCog, FaSmile } from 'react-icons/fa';
import imgstep1 from '../../../assets/conf1/step1.jpeg'
import { FaTrashAlt } from 'react-icons/fa'; // Importar iconos de React Icons
import { useNavigate } from "react-router-dom";

// Definición de los pasos/instrucciones
const instructions = [
   {
      id: 1,
      text: "Paso 1: Dí a Alexa: «Alexa, borra lo que dije hoy»",
      image1: imgstep1,
      image2: null,
      textBelow: null,
      icon: <FaCog />
   }
];

const InstructionScreen1 = () => {
   const navigate = useNavigate();
   const [currentStep, setCurrentStep] = useState(0);  // Paso actual, por defecto es 0
   const [completedSteps, setCompletedSteps] = useState([]);  // Para llevar un registro de los pasos completados
   const [showModal, setShowModal] = useState(false);  // Estado para controlar la visibilidad del modal
   const instruction = instructions[currentStep];  // Instrucción actual
   const progress = ((currentStep + 1) / instructions.length) * 100; // Cálculo del progreso

   // Manejador para completar el paso
   const handleStepComplete = () => {
      setCompletedSteps([...completedSteps, instruction.id]); // Marca el paso como completado
      if (currentStep < instructions.length - 1) {
         setCurrentStep(currentStep + 1); // Avanzar al siguiente paso
      }
   };

   // Manejador para ir al paso anterior
   const handlePreviousStep = () => {
      if (currentStep > 0) {
         setCurrentStep(currentStep - 1); // Retroceder al paso anterior
      }
   };

   // Manejador para finalizar las instrucciones y mostrar el modal
   const handleFinish = () => {
      setShowModal(true); // Muestra el modal de felicitación
   };

   // Manejador para cerrar el modal y redirigir a la configuración
   // const handleCloseModal = () => {
   //    setShowModal(false); // Cierra el modal
   //    // Aquí puedes redirigir al menú de configuraciones
   //    // Usando react-router-dom, por ejemplo:
   //    window.location.href = 'https://guia-alexa.firebaseapp.com/config-menu'; // O utilizar history.push si usas react-router
   // };

   return (
      <div className="container my-5">
         <div className="d-flex align-items-center mb-5">
            <FaTrashAlt className="text-danger mx-3" style={{ fontSize: '2rem' }} />
            <h1 className="card-title">Borra los comandos de voz a diario</h1>
         </div>
         <h3 className="text-center text-secondary">{instruction.text}</h3>
         <div className="d-flex flex-column align-items-center" style={{ minHeight: '60vh' }}>
            <img src={imgstep1} alt="step1" className="img-fluid mb-4 rounded-2" />
            <div className="bg-white rounded shadow w-75 p-1 mb-2">
               <p className="text-center m-0" style={{ fontSize: '1.1rem', color: '#333' }}>
                  Si dices: «Alexa, borra lo que dije hoy», tu dispositivo con Alexa borrará las grabaciones de voz diarias.
               </p>
            </div>
         </div>

         <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />
         <div className="d-flex justify-content-center mt-4">
            {currentStep > 0 && (
               <button className="btn btn-secondary mx-2" onClick={handlePreviousStep}>
                  <FaArrowLeft /> Anterior
               </button>
            )}
            {currentStep < instructions.length - 1 ? (
               <button className="btn btn-primary mx-2" onClick={handleStepComplete}>
                  Siguiente <FaArrowRight />
               </button>
            ) : (
               <button className="btn btn-danger mx-2" onClick={handleFinish}>
                  Finalizar
               </button>
            )}
         </div>

         {/* Modal de felicitación */}
         <Modal
            show={showModal}
            onHide={() => navigate("/config-menu")}
            centered
            style={{
               backdropFilter: 'blur(5px)', // Fondo difuminado
               borderRadius: '10px',
               boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)',
            }}
         >
            <Modal.Header
               closeButton
               style={{
                  backgroundColor: '#007BFF', // Fondo azul del encabezado
                  color: '#fff', // Texto blanco
                  textAlign: 'center',
                  borderBottom: '3px solid lightblue',
               }}
            >
               <Modal.Title style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  🎉 ¡Felicidades!
               </Modal.Title>
            </Modal.Header>
            <Modal.Body
               className="text-center"
               style={{
                  padding: '20px',
                  backgroundColor: '#f9f9ff',
                  borderBottom: '2px solid lightblue',
               }}
            >
               <FaSmile
                  size={60}
                  color="lightblue"
                  style={{ marginBottom: '15px', textShadow: '0 0 10px lightblue' }}
               />
               <h4
                  style={{
                     fontSize: '1.5rem',
                     color: '#333',
                     marginBottom: '10px',
                     fontWeight: 'bold',
                  }}
               >
                  ¡Has completado todos los pasos!
               </h4>
               <p
                  style={{
                     fontSize: '1rem',
                     color: '#555',
                     marginBottom: '0',
                  }}
               >
                  ¡Gracias por seguir las instrucciones!
               </p>
            </Modal.Body>
            <Modal.Footer
               style={{
                  backgroundColor: '#007BFF',
                  justifyContent: 'center',
                  padding: '10px',
               }}
            >
               <Button
                  variant="light"
                  style={{
                     color: '#007BFF',
                     fontWeight: 'bold',
                     backgroundColor: '#fff',
                     border: '2px solid #007BFF',
                     borderRadius: '5px',
                     padding: '10px 20px',
                     boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
                     transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                     e.target.style.backgroundColor = '#007BFF';
                     e.target.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                     e.target.style.backgroundColor = '#fff';
                     e.target.style.color = '#007BFF';
                  }}
                  onClick={() => navigate("/config-menu")}
               >
                  Volver al Menú de Configuraciónes
               </Button>
            </Modal.Footer>
         </Modal>

      </div>
   );
};

export default InstructionScreen1;