import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
   botName: "Alexa Secure Bot",
   initialMessages: [
      createChatBotMessage(`Hola, ¿Qué quieres saber?`, {
         widget: "options",
      }),
   ],
   widgets: [
      {
         widgetName: "options",
         widgetFunc: (props) => <Options {...props} />,
      },
      {
         widgetName: "recordatorios",
         widgetFunc: (props) => <Quiz {...props} />,
         props: {
            questions: [
               {
                  question: "¿Cómo funciona?",
                  answer:
                     "Simplemente te suscribes con tu correo electrónico en la pestaña de notificaciones. \nRecibirás correos periódicos recordándote borrar tus grabaciones de voz de Alexa.",
                  id: 1,
               }
            ],
         },
      },
      {
         widgetName: "acerca de",
         widgetFunc: (props) => <Quiz {...props} />,
         props: {
            questions: [
               {
                  question: "Leer más",
                  answer:
                     "La seguridad y privacidad de tu dispositivo son fundamentales para proteger tu información personal y evitar accesos no autorizados. Sin medidas adecuadas, tus datos pueden ser expuestos sin que te des cuenta, y tus actividades privadas podrían ser aprovechadas por personas o empresas sin tu consentimiento.",
                  id: 1,
               },
               {
                  question: "Leer más",
                  answer:
                     "Esta guía está diseñada para ayudarte a mejorar la seguridad y privacidad de tus dispositivos. Te ofreceremos pasos sencillos, como borrar el historial de voz de Alexa, configurar tu privacidad correctamente y mucho más.",
                  id: 2,
               },
            ],
         },
      },
      {
         widgetName: "configuraciones",
         widgetFunc: (props) => <Quiz {...props} />,
         props: {
            questions: [
               {
                  question: "Leer más",
                  answer:
                     "En esta sección, encontrarás consejos prácticos sobre cómo proteger tus grabaciones de voz, configurar tu dispositivo para que sea más seguro.",
                  id: 1,
               },
               {
                  question: "Leer más",
                  answer:
                     "La guía te enseña a borrar tus grabaciones diarias, eliminar el historial completo de Alexa, cambiar la palabra de activación, y mucho más, todo con instrucciones claras y fáciles de seguir. ¡Es una forma rápida y sencilla de asegurar que tu privacidad esté protegida!",
                  id: 2,
               },
            ],
         },
      },
   ],
};

export default config;