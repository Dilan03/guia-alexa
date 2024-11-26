import { useState } from 'react';
import { ProgressBar, Modal, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaCog, FaSmile } from 'react-icons/fa';
import imgstep1 from '../../../assets/conf1/step1.png'
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
            <img src={imgstep1} alt="step1" className="img-fluid mb-4" />
            <p>Si dices: «Alexa, borra lo que dije hoy», tu dispositivo con Alexa borrará las grabaciones de voz diarias, y si realizas esta acción cada la noche antes de acostarte, te asegurarás de no dejar rastro de tus grabaciones de Alexa.</p>
            <button
               onClick={handleStepComplete} // Marca el paso como completado
               className="btn btn-outline-primary btn-lg w-50 my-2 d-flex align-items-center justify-content-center"
            >
               <span style={{ marginRight: '10px' }}>{instruction.icon}</span>
               {completedSteps.includes(instruction.id) ? "Paso completado" : "Marcar como completado"}
            </button>
         </div>

         <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />
         <div className="d-flex justify-content-between mt-4">
            {currentStep > 0 && (
               <button className="btn btn-secondary" onClick={handlePreviousStep}>
                  <FaArrowLeft /> Anterior
               </button>
            )}
            {currentStep < instructions.length - 1 ? (
               <button className="btn btn-primary" onClick={handleStepComplete}>
                  Siguiente <FaArrowRight />
               </button>
            ) : (
               <button className="btn btn-success" onClick={handleFinish}>
                  Finalizar
               </button>
            )}
         </div>

         {/* Modal de felicitación */}
         <Modal show={showModal} onHide={() => navigate("/config-menu")} centered>
            <Modal.Header closeButton>
               <Modal.Title>¡Felicidades!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
               <FaSmile size={50} color="lightblue" />
               <h4>¡Has completado todos los pasos!</h4>
               <p>¡Gracias por seguir las instrucciones!</p>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => navigate("/config-menu")}>
                  Volver al Menú de Configuración
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default InstructionScreen1;