import { useState } from 'react';
import { ProgressBar, Modal, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaCog, FaSmile, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import imgstep1 from '../../../assets/conf5/step1.png'
import imgstep2 from '../../../assets/conf5/step2.png'
import imgstep3 from '../../../assets/conf5/step3.png'
import imgstep4 from '../../../assets/conf5/step4.png'
import imgstep5 from '../../../assets/conf5/step5.png'
import imgstep6 from '../../../assets/conf5/step6.png'
import imgstep7 from '../../../assets/conf5/step7.png'
import imgstep8 from '../../../assets/conf5/step8.png'
import imgstep9 from '../../../assets/conf5/step9.png'
import imgstep10 from '../../../assets/conf5/step10.png'
import imgstep11 from '../../../assets/conf5/step11.png'

// Definición de los pasos/instrucciones
const instructions = [
   {
      id: 1,
      text: "Paso 1: Entra en la opción de 'Más'",
      image: imgstep1,
      textBelow: 'Opción de "Más"',
      icon: <FaCog />
   },
   {
      id: 2,
      text: "Paso 2: Entra en la opción de Configuración",
      image: imgstep2,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 3,
      text: "Paso 3: Entra en la opción de Configuración de la Cuenta",
      image: imgstep3,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 4,
      text: "Paso 4: Entra en la opción de Compras por voz",
      image: imgstep4,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 5,
      text: "Paso 5: Desactiva las compras por voz",
      image: imgstep5,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 6,
      text: "Paso 6: Entra de nuevo en la opción de 'Más'",
      image: imgstep6,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 7,
      text: "Paso 7: Entra de nuevo en la opción de Configuración",
      image: imgstep7,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 8,
      text: "Paso 8: Entra en la opción de Privacidad de Alexa",
      image: imgstep8,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 9,
      text: "Paso 9: Entra en la opción de Administrar Datos de Alexa",
      image: imgstep9,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 10,
      text: "Paso 10: Localiza la opción de Controles de Compra",
      image: imgstep10,
      textBelow: null,
      icon: <FaCog />
   },
   {
      id: 11,
      text: "Paso 11: Elige la opción recomendada, no dejes la primera",
      image: imgstep11,
      textBelow: 'Es recomendable la segunda opción, con un código de voz',
      icon: <FaCog />
   },
];

const InstructionScreen5 = () => {
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
            <FaShoppingCart className="text-primary mx-3" style={{ fontSize: '2rem' }} />
            <h1 className="card-title">Configurar las compras mediante voz</h1>
         </div>
         <h3 className="text-center text-secondary">{instruction.text}</h3>
         <div className="d-flex flex-column align-items-center" style={{ minHeight: '60vh' }}>
            <img src={instruction.image} alt="step1" className="img-fluid mb-4" />
            <p>{instruction.textBelow}</p>
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

export default InstructionScreen5;